import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { countries } from './country-list';

@Component({
  selector: 'app-where-in-the-world',
  templateUrl: './where-in-the-world.component.html',
  styleUrls: ['./where-in-the-world.component.scss']
})
export class WhereInTheWorldComponent implements AfterViewInit {
  @ViewChild('map', { static: true }) map!: ElementRef;
  currentCountry: string = '';
  currentYear: number = 0;
  currentCountryIndex = 0;

  countries = countries;

  constructor() {
    this.countries.sort((a, b) => a.year - b.year);
  }

  ngAfterViewInit(): void {
    const svgObject = this.map.nativeElement;
    svgObject.addEventListener('load', () => {
      const svgDocument = (svgObject.contentDocument || svgObject.getSVGDocument());
      this.updateCountry(svgDocument);
    });
  }

  resetMap() {
    const svgObject = this.map.nativeElement;
    const svgDocument = (svgObject.contentDocument || svgObject.getSVGDocument());

    // Reset SVG fill colors
    this.countries.forEach(country => {
      const countryElement = svgDocument.querySelector(`.land.${country.code}`) as SVGElement;
      if (countryElement) {
        countryElement.style.fill = '';
      }
    });

    // Reset current country index and start updating again
    this.currentCountryIndex = 0;
    this.updateCountry(svgDocument);
  }

  updateCountry(svgDocument: Document) {
    if (this.currentCountryIndex < this.countries.length) {
      const currentCountry = this.countries[this.currentCountryIndex];
      const countryElement = svgDocument.querySelector(`.land.${currentCountry.code}`) as SVGGraphicsElement;

      if (countryElement) {
        const bbox = countryElement.getBBox();
        let cx = bbox.x + bbox.width / 2;
        const cy = bbox.y + bbox.height / 2;

        // Adjust transformation origin for specific countries
        if (currentCountry.code === 'us') {
          cx -= 900;
        }
        countryElement.style.fill = 'red';
        countryElement.setAttribute('transform-origin', `${cx}px ${cy}px`);
        countryElement.setAttribute('transform', `scale(1.5)`);

        setTimeout(() => {
          countryElement.setAttribute('transform-origin', '');
          countryElement.setAttribute('transform', '');
        }, 1000);
      }

      this.currentCountry = currentCountry.name;
      this.currentYear = currentCountry.year;

      setTimeout(() => {
        this.currentCountryIndex++;
        this.updateCountry(svgDocument);
      }, 1500);
    }
  }

}
