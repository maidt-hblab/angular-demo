import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from "./detail/detail.component";
import { ListComponent } from "./list/list.component";
import { ProductComponent } from "./product.component";
import { AuthGuard } from '../auth.guard';

const productRoutes: Routes = [
  {
    path: 'product',
    component: ProductComponent,
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: ':id',
        component: DetailComponent,
        canActivate: [AuthGuard],
      }
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(productRoutes)
  ],
  exports: [ RouterModule ]
})

export class ProductRoutingModule {}
