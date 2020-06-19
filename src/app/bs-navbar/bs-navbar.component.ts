import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.setItem("cartCount", "0");
  }

  getQuantity() {
    return localStorage.getItem("cartCount");
  }
}
