import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  id: any = '';
  product: any = {};
  user: any = {};
  customers: any = [];

  public createForm: FormGroup = this.formBuilder.group({
    customer_id: [''],
    order_date: [''],
    order_total: ['', [Validators.required]],
    order_date_delivery: [''],
    order_status: [''],
  });

  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.api.getCustomer().subscribe({
      next: (res) => {
        console.log(res);

        this.customers = res;
      },
      error: (error: any) => {
        console.log('error: ', error);
      },
      complete: () => {
        console.log('producto cargado');
      },
    });

    this.api.getAuth().subscribe({
      next: (res) => {
        // console.log(res.data[0]);

        this.user = res.data[0];
      },
      error: (error: any) => {
        console.log('error: ', error);
      },
      complete: () => {
        console.log('producto cargado');
      },
    });

    this.api.getProduct(this.id).subscribe({
      next: (res) => {
        this.product = res;
      },
      error: (error: any) => {
        console.log('error: ', error);
      },
      complete: () => {
        console.log('producto cargado');
      },
    });
  }

  onSubmit(form: any) {
    if (this.createForm.invalid) return;

    const { order_total } = this.createForm.value;

    const order = {
      customer_id: 2,
      order_date: new Date(),
      order_total: order_total,
      order_date_delivery: new Date(),
      order_status: 'completed',
    };

    this.api.createOrder(order).subscribe({
      next: (res: any) => {
        console.log('res created:', res);
      },
      error: (error: any) => {
        console.log('error: ', error);
      },
      complete: () => {
        this.router.navigate(['home']);
      },
    });
  }
}
