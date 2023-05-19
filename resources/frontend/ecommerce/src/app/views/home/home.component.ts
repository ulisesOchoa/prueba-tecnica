import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Router } from '@angular/router';
import { ProductListI } from '../../models/ProductList.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  products: any = {};

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.api.getAllProducts(1).subscribe((prod) => {
      this.products = prod;
      console.log(this.products);
    });
  }

  viewProduct(id: number) {
    this.router.navigate(['product', id]);
  }

  onPaginate(url:number) {
    this.api.getAllProducts(url).subscribe((prod) => {
      this.products = prod;
      console.log(prod);
    });
  }
}
