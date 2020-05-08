import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-qoutes-home',
  templateUrl: './qoutes-home.component.html',
  styleUrls: ['./qoutes-home.component.css']
})
export class QoutesHomeComponent implements OnInit {
  quotes: Quote[]=[
    new Quote('Collin Owino', 'Michelle Muchai', 'Ai Shaaawrry', new Date())
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
