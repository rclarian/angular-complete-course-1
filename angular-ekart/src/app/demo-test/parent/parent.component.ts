import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, TestComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  @ViewChild('para') paraEl: ElementRef;

  showParaValue(){
    console.log(this.paraEl.nativeElement);
  }
}
