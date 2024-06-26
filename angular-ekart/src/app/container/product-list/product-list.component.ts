import { Component, Input } from '@angular/core';
import {NgFor, NgForOf, CommonModule} from "@angular/common";
import { ProductComponent } from './product/product.component';
import { FilterComponent } from './filter/filter.component'
import { Product } from '../../Models/Product';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [NgForOf, CommonModule, ProductComponent, FilterComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  selectedProduct: Product;
  products = [
    {
      id: 1,
      name: "Nike React Infinity Run Flyknit",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 160,
      discountPrice:140,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id: 2,
      name: "Nike React Miler",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 130,
      is_in_inventory: false,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-5cc7de3b-2afc-49c2-a1e4-0508997d09e6/react-miler-mens-running-shoe-DgF6nr.jpg",
      slug: "nike-react-miler"
    },
    {
      id: 3,
      name: "Nike Air Zoom Pegasus 37",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "NIKE",
      gender: "WOMEN",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black", "Brown", "Red"],
      price: 120,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-33b0a0a5-c171-46cc-ad20-04a768703e47/air-zoom-pegasus-37-womens-running-shoe-Jl0bDf.jpg",
      slug: "nike-air-zoom-pegasus-37"
    },
    {
      id: 4,
      name: "Nike Joyride Run Flyknit",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "NIKE",
      gender: "WOMEN",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["White","Brown", "Red"],
      price: 180,
      discountPrice:140,
      is_in_inventory: false,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/99a7d3cb-e40c-4474-91c2-0f2e6d231fd2/joyride-run-flyknit-womens-running-shoe-HcfnJd.jpg",
      slug: "nike-joyride-run-flyknit"
    },
    {
      id: 5,
      name: "Nike Mercurial Vapor 13 Elite FG",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "NIKE",
      gender: "WOMEN",
      category: "FOOTBALL",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 250,
      is_in_inventory: false,
      items_left: 3,
      slug: "ss-pm-0093"
    },
    {
      id: 26,
      name: "Nizza X Disney",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "ADIDAS",
      gender: "KIDS",
      category: "CASUAL",
      size: [6, 7, 8],
      color: ["White", "Blue", "Black", "Red"],
      price: 55,
      is_in_inventory: false,
      items_left: 6,
      imageURL: "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/ef901c7aeac042578eceab9d0159196c_9366/Nizza_x_Disney_Sport_Goofy_Shoes_White_FW0651_01_standard.jpg",
      slug: "nizza-x-disney"
    },
    {
      id: 27,
      name: "X_PLR",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "ADIDAS",
      gender: "KIDS",
      category: "CASUAL",
      size: [6, 7, 8, 9],
      color: ["White", "Blue", "Black", "Brown", "Red"],
      price: 65,
      discountPrice:45,
      is_in_inventory: true,
      items_left: 5,
      imageURL: "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/a36518227134495da766ab9d01772fa2_9366/X_PLR_Shoes_Red_FY9063_01_standard.jpg",
      slug: "x_plr"
    },
    {
      id: 28,
      name: "Stan Smith",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "ADIDAS",
      gender: "KIDS",
      category: "CASUAL",
      size: [6, 7, 8, 9, 10, 11],
      color: ["White", "Blue", "Black"],
      price: 55,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/d0720712d81e42b1b30fa80800826447_9366/Stan_Smith_Shoes_White_M20607_M20607_01_standard.jpg",
      slug: "stan-smith"
    },
    {
      id: 29,
      name: "NMD_R1",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "ADIDAS",
      gender: "KIDS",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black", "Brown", "Red"],
      price: 120,
      discountPrice:105,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/99ca762cb9054caf82fbabc500fd146e_9366/NMD_R1_Shoes_Blue_FY9392_01_standard.jpg",
      slug: "nmd_r1"
    },
    {
      id: 30,
      name: "NMD_R1 Flash Red",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "ADIDAS",
      gender: "WOMEN",
      category: "CASUAL",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black", "Brown"],
      price: 140,
      is_in_inventory: true,
      items_left: 5,
      imageURL: "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/90f85768e3894aeaab67aba0014a3379_9366/NMD_R1_Shoes_Red_FY9389_01_standard.jpg",
      slug: "nmd_r1-flash-red"
    },
    {
      id: 31,
      name: "Superstar",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "ADIDAS",
      gender: "WOMEN",
      category: "CASUAL",
      size: [6, 7, 8, 9, 10, 11, 12],
      color: ["White", "Blue", "Black"],
      price: 90,
      discountPrice:80,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/12365dbc7c424288b7cdab4900dc7099_9366/Superstar_Shoes_White_FW3553_FW3553_01_standard.jpg",
      slug: "superstar"
    },
    {
      id: 32,
      name: "Club C Revenge Mens",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "Reebok",
      gender: "MEN",
      category: "CASUAL",
      size: [6, 7, 8, 9, 10, 11],
      color: ["White", "Blue", "Black", "Brown", "Red"],
      price: 70,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/7599294868804d78a1b1ab6f01718a5e_9366/Club_C_Revenge_Men's_Shoes_White_FV9877_01_standard.jpg",
      slug: "club-c-revenge-mens"
    },
    {
      id: 33,
      name: "SK80-Low",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "Vans",
      gender: "MEN",
      category: "CASUAL",
      size: [6, 7, 8, 9],
      color: ["White", "Blue", "Black", "Red"],
      price: 60,
      discountPrice:25,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://images.vans.com/is/image/Vans/UUK24I-HERO?$583x583$",
      slug: "sk80-low"
    },
    {
      id: 34,
      name: "Michael Feburary SK8-Hi",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "Vans",
      gender: "MEN",
      category: "CASUAL",
      size: [6, 7, 8, 9, 10, 11, 12],
      color: ["White", "Blue", "Black", "Brown", "Red"],
      price: 72,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://images.vans.com/is/image/Vans/MV122M-HERO?$583x583$",
      slug: "michael-feburary-sk8-hi"
    },
    {
      id: 35,
      name: "Michael March SK8-Hi",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "Vans",
      gender: "MEN",
      category: "CASUAL",
      size: [6, 7, 8, 9, 10, 11, 12],
      color: ["White", "Blue", "Black", "Brown", "Red"],
      price: 72,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://images.vans.com/is/image/Vans/MV122M-HERO?$583x583$",
      slug: "michael-march-sk8-hi"
    }
  ];

  totalProductCount = this.products.length;
  totalProductInStock = this.products.filter(p => p.is_in_inventory === true).length;
  totalProductOutOfStock = this.products.filter(p => p.is_in_inventory === false).length;

  @Input()
  searchTextProductList: string = '';

  selectedFilterRadioButtonParent: string = 'all';

  onFilterChanged(event: string){
    this.selectedFilterRadioButtonParent = event;
    //console.log('Parent' + '= '+ this.selectedFilterRadioButtonParent)
  }
}
