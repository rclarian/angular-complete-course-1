import { Component, ElementRef, 
  ViewChild, Input, OnChanges, 
  SimpleChanges, OnInit, 
  DoCheck, AfterContentInit, 
  ContentChild, AfterContentChecked, 
  AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
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
export class ParentComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  @ViewChild('para') paraEl: ElementRef;

  showParaValue(){
    console.log(this.paraEl.nativeElement);
  }

  title: string = 'Parent Component';
  @Input() message: string;

  @ViewChild('temp') tempPara: ElementRef;
  @ContentChild('temp') paraContent: ElementRef;

  constructor(){
    //console.log('Parent component constructor called');
    // console.log(this.title);
    // console.log(this.message);
  }

  ngOnChanges(changes: SimpleChanges){
    //console.log(this.message);
    //console.log(changes);
    //console.log('ngOnChanges hook called');
  }

  ngOnInit(){
    //console.log('ngOnInit hook called');
    //console.log(this.tempPara.nativeElement.innerHTML);
  }

  ngDoCheck(){
    //console.log('ngDoCheck hook called');
    //console.log('In ngDoCheck',  this.paraContent);
  }

  ngAfterContentInit(){
    //console.log('ngAfterContentInit hook called');
    //console.log('In ngAfterContentInit',  this.paraContent.nativeElement);
  }

  ngAfterContentChecked() {
    //console.log('ngAfterContentChecked hook called');
    //console.log('In ngAfterContentChecked',  this.tempPara);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit hook called');
    //console.log('In ngAfterViewInit',  this.tempPara);
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked hook called');
    //console.log(this.tempPara.nativeElement.textContent);
  }
  ngOnDestroy() {
    console.log('ngOnDestroy hook called');
  }
}
