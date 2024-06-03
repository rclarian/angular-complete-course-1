import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { TestComponent } from '../../test/test.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @ContentChild('para') paragraphEl: ElementRef;

  @ContentChild(TestComponent) testEl: TestComponent;

  @ContentChildren('para') paraElements: QueryList<ElementRef>;

  @ContentChildren(TestComponent) testElements : QueryList<TestComponent>;

  StyleParagraph(){
    // console.log(this.paragraphEl.nativeElement);
    // console.log(this.testEl.name);

    //this.paraElements.forEach((el) => {console.log(el.nativeElement)});
    this.testElements.forEach((el) => {console.log(el.name)});
  }
}
