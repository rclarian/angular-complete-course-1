import { Component } from '@angular/core';
import {NgFor, NgForOf} from "@angular/common";

@Component({
  selector: 'main-menu',
  standalone: true,
  imports: [NgFor, NgForOf],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {
  mainMenuItems:string[] = ['Home', 'Products', 'Sale', 'About', 'Contact'];
}
