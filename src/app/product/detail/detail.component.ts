import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  product: any =  null;

  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe( params => {
      const id: any = params.get('id');
      this.product = this.productService.findProductById(id);
    })
  }

  backToList() {
    this.router.navigate(['/product']);
  }

}
