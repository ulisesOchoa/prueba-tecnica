import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  orders: any = [];
  orderToView: any = {};
  orderDetail: any = {};
  showModal: boolean = false;

  dtOptions: DataTables.Settings = {
    pagingType: 'full_numbers',
    pageLength: 10,
    responsive: true,
  };

  constructor(private api: ApiService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.api.getOrders().subscribe({
      next: (res: any) => {
        // console.log(res);
        this.orders = res;
      },
      error: (error: any) => {
        console.log('error: ', error);
      },
      complete: () => {
        console.log('carga de ordenes completa');
      },
    });
  }

  openDetailModal(order: any) {
    this.orderToView = order;
    this.showModal = true;
    this.orderDetail = null;
  }

  viweOrderDetail(id: any) {
    this.api.getOrderDetail(id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.orderDetail = res;
      },
      error: (error: any) => {
        console.log('error: ', error);
      },
      complete: () => {
        console.log('carga de orden detail completa');
        this.showModal = true;
      },
    });
  }

  closeModal() {
    this.showModal = false;
  }
}
