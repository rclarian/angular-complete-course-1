import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
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

  updateSearchText(inputEL: HTMLInputElement){
    //console.log(inputEL.value);
    //this.searchText = event.target.value;
    this.searchText = inputEL.value;
    this.searchTextChangedChild.emit(this.searchText);
  }


}
