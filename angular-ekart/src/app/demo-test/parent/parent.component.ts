import { Component, ElementRef, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, TestComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnChanges{
  @ViewChild('para') paraEl: ElementRef;

  showParaValue(){
    console.log(this.paraEl.nativeElement);
  }

  title: string = 'Parent Component';
  @Input() message: string;

  constructor(){
    console.log('Parent component constructor called');
    console.log(this.title);
    console.log(this.message);
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges hook called');
    console.log(this.message);
    console.log(changes);
  }
}
