import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  name = 'John Doe';
  product = {
    name: 'iPhone 15 Pro Max',
    price: 2999,
    color: 'Red',
    discount: 8.5,
    inStock: 20,
    pImage: '/assets/images/iphone.png'
  }

  getDiscountedPrice(){
    return (this.product.price - (this.product.price * this.product.discount / 100)).toFixed(2);
  }
}
