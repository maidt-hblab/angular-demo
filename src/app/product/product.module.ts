import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { Routes } from '@angular/router';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { HomeComponent } from '../home/home.component';

const productRoutes: Routes = [

  {
    path: 'product',
    component: ListComponent
  },
  {
    path: 'product/:id',
    component: DetailComponent
  }

];

@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    ProductComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
  ],
  exports: [HomeComponent]
})
export class ProductModule { }
