import { Component, ElementRef, ViewChild, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import {NgFor, NgForOf, CommonModule} from "@angular/common";
import { ChildComponent } from './child/child.component';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [NgFor, ChildComponent, TestComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnChanges, OnInit{
  @ViewChild('para') paraEl: ElementRef;

  showParaValue(){
    console.log(this.paraEl.nativeElement);
  }

  title: string = 'Parent Component';
  @Input() message: string[];

  @ViewChild('temp') tempPara: ElementRef;

  constructor(){
    console.log('Parent component constructor called');
    // console.log(this.title);
    // console.log(this.message);
  }

  ngOnChanges(changes: SimpleChanges){
    //console.log(this.message);
    //console.log(changes);
    console.log('ngOnChanges hook called');
  }

  ngOnInit(){
    console.log('ngOnInit hook called');
    //console.log(this.tempPara.nativeElement.innerHTML);
  }

}
