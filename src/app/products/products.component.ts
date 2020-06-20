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

  obj = {
    value: '',
    letMeKnow() {
      console.log(`The variable has changed to ${this.testVar}`);
    },
    get testVar() {
      return this.value;
    },
    set testVar(value) {
      this.value = value;
      this.letMeKnow();
    }
  }

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

    console.log(this.search);
    console.log(this.obj.testVar)

    this.obj.testVar = 5;
    console.log(this.obj.testVar)

    this.obj.testVar = 15;
    console.log(this.obj.testVar)
  }

  searchResults(searchInput: string) {
    console.log(searchInput);
  }

}
