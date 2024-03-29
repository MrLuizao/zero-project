import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor( private el: ElementRef ) {
  }

  @HostListener('click')
  nextFunc(){

    let elem = this.el.nativeElement.parentElement.parentElement.children[0];
    let item = elem.getElementsByClassName('item');    
    elem.append(item[0]);

  }
}
