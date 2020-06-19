import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from './../services/shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input("product") product;
  @Input("show-actions") showActions = true;
  @Input("shopping-cart") shoppingCart: any;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  addToCart() {
    if (!this.product.quantity)
      this.product.quantity = 1;
    else
      this.product.quantity += 1;


    this.shoppingCart[this.product.id] = this.product;
    this.getTotalCount();
  }

  removeFromCart() {
    this.product.quantity -= 1;

    this.getTotalCount();
  }

  getQuantity() {
    if (this.shoppingCart.length === 0 || !this.product.quantity) return 0;

    let item = this.shoppingCart[this.product.id].quantity;
    return item;
  }

  getTotalCount() {
    let cartCount = 0;
    for (let i = 0; i < this.shoppingCart.length; i++) {
      if (this.shoppingCart[i]) {
        cartCount += this.shoppingCart[i].quantity;
      }
    }

    localStorage.setItem("cartCount", JSON.stringify(cartCount));
  }

}
