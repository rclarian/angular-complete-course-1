import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component'
import {NgFor, NgForOf} from "@angular/common";
import { ProductListComponent } from './product-list/product-list.component'

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [NgFor, NgForOf, SearchComponent, ProductListComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  listOfString: string[] = ['Mark', 'Steve', 'Merry', 'John', 'Sarah'];

  searchTextContainer: string = '';

  setSearchText(value: string){
    this.searchTextContainer = value;
  }
}
