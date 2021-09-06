import { Component, OnInit } from '@angular/core';
import { IProduct, ProductService } from '../../product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  productList: IProduct[] = [];

  constructor( private productService: ProductService ) { }

  getProductSuccess(products: any) {
    this.productList = [...products];
    this.productService.setProduct(products);
  }

  ngOnInit(): void {
    this.productService.getProductList()
      .subscribe(res => this.getProductSuccess(res));
  }

}
