import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighestUpvotes]'
})
export class HighestUpvotesDirective {  

  constructor(private elem:ElementRef) {    
    this.elem.nativeElement.style.backgroundColor = 'rgb(0, 0, 0, 0.6)';   
    this.elem.nativeElement.style.color = 'white';
  }
  
}
