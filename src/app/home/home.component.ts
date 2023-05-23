import { Component } from '@angular/core';
import { productsData } from '../db/products';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // opened = false;
  // title = 'frontend';
  // data: string | undefined;
  // receiveData(data: any) {
  //   this.data = data;
  // }
  products: any;

  ngOnInit() {
    this.getproducts();
  }
  constructor(private http: HttpClient) {}

  getproducts() {
    this.products = productsData;
  }
}
