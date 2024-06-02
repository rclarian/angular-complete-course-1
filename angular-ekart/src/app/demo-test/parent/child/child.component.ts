import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @ContentChild('para') paragraphEl: ElementRef;

  StyleParagraph(){
    console.log(this.paragraphEl.nativeElement);
  }
}
