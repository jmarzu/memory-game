import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  boardValues = [
    { id: 1, value: 1, label: 'One' },
    { id: 2, value: 2, label: 'Two' },
    { id: 3, value: 3, label: 'Three' },
    { id: 4, value: 4, label: 'Four' },
    { id: 5, value: 5, label: 'Five' },
    { id: 6, value: 6, label: 'Six' },
    { id: 7, value: 6, label: 'Six' },
    { id: 8, value: 5, label: 'Five' },
    { id: 9, value: 4, label: 'Four' },
    { id: 10, value: 3, label: 'Three' },
    { id: 11, value: 2, label: 'Two' },
    { id: 12, value: 1, label: 'One' }
   ];

  selected = {};
  matchedValues = {};
  disableCard = false;

  constructor() { }

  ngOnInit() {
  }

  selectCard(card) {
    if (this.selected[card.id] && this.selected[card.id] === card.id) {
      delete this.selected[card.id];
    } else {
      this.selected[card.id] = card.value;
    }

    if (Object.keys(this.selected).length === 2) {
      this._doCardsMatch(Object.values(this.selected));
      this.disableCard = true;
    }
  }

  _doCardsMatch(selected) {
    if (selected[0] === selected[1]) {
      this.matchedValues = { ...this.matchedValues, ...this.selected };
      this.disableCard = false;
    }

    setTimeout(() => {
      this.selected = {};
      this.disableCard = false;
    }, 2000);
  }

  _resetGameBoard() {
    this.selected = {};
    this.disableCard = false;
  }

  restartGame() {
    location.reload();
  }
}
