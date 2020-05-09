import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-qoutes-home',
  templateUrl: './qoutes-home.component.html',
  styleUrls: ['./qoutes-home.component.css']
})
export class QoutesHomeComponent implements OnInit {
  quotes: Quote[]=[];

  addNewQuote(newQuote:Quote){
    this.quotes.unshift(newQuote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
