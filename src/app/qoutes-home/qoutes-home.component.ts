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

  deleteQuote(index:number){
    var toDelete:boolean=confirm("Delete quote?");
    if(toDelete){
      this.quotes.splice(index,1);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
