import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SvgMapService {

  countries: any[];

  constructor() {
    this.countries = [
      {
        "name": "Ireland",
        "path": `M50.084 103.196L24.998 124.418l25.087 21.221 66.899-62.388 20.777-21.222z`,
        "fill": '#ffffff'
      },
      {
        "name": "France",
        "path": `M120.218 25.001l-25.087 21.221 25.001 69.385 66.899-62.388 20.777-21.222z`,
        "fill": '#ffffff'
      },
      {
        "name": "Germany",
        "path": `M24.998 50.084l25.086 21.221 66.899-62.388 20.777-21.222z`,
        "fill": '#ffffff'
      }
    ];
  }

  getCountries() {
    return this.countries;
  }
}
