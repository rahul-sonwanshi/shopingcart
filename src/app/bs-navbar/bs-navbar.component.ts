import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent implements OnInit {

  search: string = "abcd";
  @Output() searchEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
    localStorage.setItem("cartCount", "0");
  }

  getQuantity() {
    return localStorage.getItem("cartCount");
  }

  onSearchChange(search: string) {
    this.searchEvent.emit(search);
    console.log(search);

  }
}
