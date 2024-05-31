import { Component, Input } from '@angular/core';
import {NgFor, NgForOf, CommonModule} from "@angular/common";
import { Product } from '../../../Models/Product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgForOf, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input()
  product: Product;
  // product:{
  //   id: number,
  //   name: string,
  //   description: string,
  //   brand: string,
  //   gender: string,
  //   category: string,
  //   size: number[],
  //   color: string[],
  //   price: number,
  //   discountPrice?: number,
  //   is_in_inventory: boolean,
  //   items_left: number,
  //   imageURL?: string,
  //   slug: string
  // } = undefined;
}
