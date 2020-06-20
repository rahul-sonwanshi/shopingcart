import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  filteredProducts: any;
  cart = [];
  @Input("search") search: string;
  searchValue: string = "";

  constructor(
    private productService: ProductsService,
    private shoppingCartService: ShoppingCartService
  ) { }



  ngOnInit() {
    this.productService.getProducts()
      .subscribe(data => {
        this.filteredProducts = data;
        console.log(this.filteredProducts);
      });
  }

  searchResults(searchInput: string) {
    console.log(searchInput);
  }

}
