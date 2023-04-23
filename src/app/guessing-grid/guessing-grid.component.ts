import { Component, OnInit, Injectable } from '@angular/core';
import { NameService } from '../name.service.ts';
import { Name } from '../name';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-guessing-grid',
  templateUrl: './guessing-grid.component.html',
  styleUrls: ['./guessing-grid.component.scss'],
  providers: [CookieService]
})

export class GuessingGridComponent implements OnInit {
  public names: Name[] = [];
  public allNames: Name[] = [];
  public currentName: Name = { name: '', photo: '', location: '', jobTitle: '', manager: '', visible: true };
  public guessValue = '';
  public firstNameOnly = false;
  public feedback = '';
  public success = '';
  public failure = '';
  public score = 0;
  public streak = 0;
  public namesLeft = 0;

  constructor(private cookieService: CookieService, private nameService: NameService) {
  }

  ngOnInit() {
    this.nameService.getNames().subscribe(names => {
      this.allNames = names;
      this.refreshGrid();
    });
  }

  refreshGrid() {
    // Shuffle the names array
    for (let i = this.allNames.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.allNames[i], this.allNames[j]] = [this.allNames[j], this.allNames[i]];
    }
    // Take the first 4 shuffled names
    this.names = this.allNames.slice(0, 4);
    this.currentName = this.names[Math.floor(Math.random() * this.names.length)];
    this.namesLeft = this.allNames.length;
  }

  checkGuess(name: Name) {
    const guessedName = this.currentName.name;
    console.log(guessedName, "!=", name.name)
    if (guessedName.toLowerCase() === name.name.toLowerCase()) {
      this.success = 'Correct! The person in the photo is ' + name.name + ', who works as a ' + name.jobTitle + ' in the ' + name.location + ' office, reporting to ' + name.manager + '.';
      this.failure = '';
      this.feedback = 'Correct';
      this.score += 1;
      this.streak += 1;
      this.updateMaxScore();
      this.updateMaxStreak();

      // Remove the guessed name from the allNames array
      const index = this.allNames.findIndex(n => n.name.toLowerCase() === guessedName.toLowerCase());
      if (index >= 0) {
        this.allNames.splice(index, 1);
        this.namesLeft = this.allNames.length;
      }

      // Refresh the grid if all names have been guessed correctly
      if (this.names.length === 0) {
        this.refreshGrid();
      }
    } else {
      this.failure = 'Incorrect! The person in the photo is ' + name.name + ', who works as a ' + name.jobTitle + ' in the ' + name.location + ' office, reporting to ' + name.manager + '.';
      this.success = '';
      this.feedback = 'Incorrect';
      this.streak = 0;
    }
  }

  trackName(index: number, name: Name) {
    return name.name;
  }

  updateMaxScore() {
    const maxScore = parseInt(this.cookieService.get('photo-grid-maxScore')) || 0;
    if (this.score > maxScore) {
      this.cookieService.set('photo-grid-maxScore', this.score.toString());
    }
  }

  updateMaxStreak() {
    const maxStreak = parseInt(this.cookieService.get('photo-grid-maxStreak')) || 0;
    if (this.streak > maxStreak) {
      this.cookieService.set('photo-grid-maxStreak', this.streak.toString());
    }
  }

  public getMaxScore() {
    const maxScore = parseInt(this.cookieService.get('photo-grid-maxScore')) || 0;
    return maxScore;
  }

  public getMaxStreak() {
    const maxStreak = parseInt(this.cookieService.get('photo-grid-maxStreak')) || 0;
    return maxStreak;
  }

  onNextClick() {
    this.refreshGrid();
    this.guessValue = '';
    this.feedback = '';
    this.success = '';
    this.failure = '';
  }

  shuffle(array: any[]) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
