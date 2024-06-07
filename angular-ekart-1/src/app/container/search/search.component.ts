import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = '';

  //1. Create an event
  @Output() //Child to parent
  searchTextChangedChild: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchTextChangedChild.emit(this.searchText);
  }

    //Optional 2nd argument of @ViewChild()
  //1. read = use it to read the different token from the queried elements.
  //2. static = determines when the query is resolved.
  //TRUE - is when the view is initialized (before the first change detection) for the first time.
  //FALSE - if you want it to be resolved after every change detection
  
  //@ViewChild('searchInput', {static: true}) searchInputEl: ElementRef; //example code with static
  @ViewChild('searchInput') searchInputEl: ElementRef

  updateSearchText(){
    //console.log(inputEL.value);
    //this.searchText = event.target.value;
    //this.searchText = inputEL.value;

    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchTextChangedChild.emit(this.searchText);
  }

}
