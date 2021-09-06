import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

export interface IProduct {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  categories: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: IProduct[] = [];

  constructor( private http: HttpClient ) { }

  setProduct(products: IProduct[] ) {
    this.products = [...products];
  }
  
  getProductList() {
    return this.http.get('http://demo0274941.mockable.io/product').pipe(
      tap(console.log),
      map(res => res.data)
    );
  }

  findProductById(id: string){
    const product = this.products.find(p => p.id === id);
    if(product) {
      return product;
    }
    return throwError(new Error('404 not found'));
  }
}
