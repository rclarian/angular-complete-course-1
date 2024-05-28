import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component'
import {NgFor, NgForOf} from "@angular/common";

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [NgFor, NgForOf, SearchComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  listOfString: string[] = ['Mark', 'Steve', 'Merry', 'John', 'Sarah'];
}
