import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent {
  dtOptions: DataTables.Settings = {};
  customers: any = [];
  cities: any = [];
  showModal: boolean = false;
  modalTitle: string = '';
  index: any = '';

  public createForm: FormGroup = this.formBuilder.group({
    id: [''],
    city_id: ['', [Validators.required]],
    customer_id_number: ['', [Validators.required]],
    customer_name: ['', [Validators.required]],
    customer_birth_date: ['', [Validators.required]],
    customer_address: ['', [Validators.required]],
    customer_phone: ['', [Validators.required]],
  });

  constructor(private api: ApiService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
    };

    this.api.getClients().subscribe((response) => {
      console.log(response);
      this.customers = response;
    });

    this.api.getCities().subscribe({
      next: (res: any) => {
        console.log(res);
        this.cities = res;
      },
      error: (error: any) => {
        console.log('error: ', error);
      },
      complete: () => {
        console.log('carga de ciudades completa');
        this.createForm.reset();
      },
    });
  }

  editCustomer(customer: any) {
    this.api.updateClient(customer).subscribe({
      next: (res: any) => {
        console.log('res: ', res);
        this.customers[this.index] = res;
      },
      error: (error: any) => {
        console.log('error: ', error);
      },
      complete: () => {
        console.log('Registro actualizado correctamente');
        this.showModal = false;
        this.createForm.reset();
      },
    });
  }

  deleteCustomer(customer: any, index: number) {
    this.api.deleteClient(customer).subscribe({
      next: (res: any) => {
        console.log('res: ', res);
      },
      error: (error: any) => {
        console.log('error: ', error);
      },
      complete: () => {
        console.log('Eliminación completa');
        //eliminamos el customer de la tabla customers
        this.customers.splice(index, 1);
      },
    });
  }

  async createCustomer() {
    if (this.createForm.invalid) return;

    const {
      city_id,
      customer_id_number,
      customer_name,
      customer_birth_date,
      customer_address,
      customer_phone,
    } = this.createForm.value;

    const customer = {
      city_id: city_id,
      customer_id_number: customer_id_number,
      customer_name: customer_name,
      customer_birth_date: customer_birth_date,
      customer_address: customer_address,
      customer_phone: customer_phone
    };

    this.api.createClient(customer).subscribe({
      next: (res: any) => {
        console.log('res created:', res);
        this.customers.push(res);
      },
      error: (error: any) => {
        console.log('error: ', error);
      },
      complete: () => {
        this.showModal = false;
        this.createForm.reset();
      },
    });
  }

  onSubmit(customer: any) {
    if (customer.value.id) {
      this.editCustomer(customer);
    } else {
      this.createCustomer();
    }
  }

  openCreateModal() {
    this.showModal = true;
    this.modalTitle = 'Crear';
  }

  openEditModal(customer: any, index: number) {
    this.showModal = true;
    this.modalTitle = 'Modificar Cliente';
    this.createForm.controls['id'].setValue(customer.index);
    this.createForm.patchValue(customer);
    this.index = index;
  }

  closeModal() {
    this.showModal = false;
  }
}
