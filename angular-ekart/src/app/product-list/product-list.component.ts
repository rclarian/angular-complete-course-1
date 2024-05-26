import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component'
import {NgFor, NgForOf} from "@angular/common";

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [NgFor, NgForOf, SearchComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  listOfString: string[] = ['Mark', 'Steve', 'Merry', 'John', 'Sarah'];
}
