import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSample]'
})
export class SampleDirective {

  @HostBinding('value') inputValue: string = "Hi there!";

  @HostListener('focus') logMessage() {
    console.log('Input has been focused in directive!');
  }

  constructor() { }

}
