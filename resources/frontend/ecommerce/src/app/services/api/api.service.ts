import { Injectable } from '@angular/core';
import { LoginI } from '../../models/login.interface';
import { ResponseI } from '../../models/response.interface';
import { ProductListI } from '../../models/ProductList.interface';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string = 'http://127.0.0.1/api/';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<ResponseI> {
    const route = this.url + 'login';
    const body = { email, password };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<ResponseI>(route, body, { headers });
  }

  register(data: any): Observable<ResponseI> {
    const route = this.url + 'register';

    return this.http.post<ResponseI>(route, data);
  }

  getAllProducts(page: number): Observable<ProductListI[]> {
    const route = this.url + 'product?page=' + page;

    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );

    return this.http.get<any>(route, { headers });
  }

  paginateProducts(url: string): Observable<ProductListI[]> {
    const route = url;

    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );

    return this.http.get<any>(route, { headers });
  }

  getClients() {
    const route = this.url + 'customers';
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );

    return this.http.get<any>(route, { headers });
  }

  public createClient(client: any): Observable<any> {
    const route = `${this.url}customers`;
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );

    const body = { ...client };

    const params = new HttpParams({
      fromObject: JSON.parse(JSON.stringify(body)),
    });

    return this.http.post<any>(route, params, { headers });
  }

  public updateClient(client: any): Observable<any> {
    const body = { ...client };

    const route = `${this.url}customers/${body.value.id}`;
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );

    const params = new HttpParams({
      fromObject: JSON.parse(JSON.stringify(body.value)),
    });

    return this.http.patch<any>(route, params, { headers });
  }

  public deleteClient(client: any): Observable<any> {
    const route = `${this.url}customers/${client.id}`;
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );

    return this.http.delete<any>(route, { headers });
  }

  getCities() {
    const route = `${this.url}city`;
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );

    return this.http.get<any>(route, { headers });
  }

  getProduct(id: any) {
    const route = `${this.url}product/${id}`;
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );

    return this.http.get<any>(route, { headers });
  }

  public createOrder(order: any): Observable<any> {
    const route = `${this.url}order`;
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );

    const body = { ...order };
    console.log(body);

    const params = new HttpParams({
      fromObject: JSON.parse(JSON.stringify(body)),
    });

    return this.http.post<any>(route, params, { headers });
  }

  public searchCustomers(search: any): Observable<any> {
    const route = `${this.url}/customers/searchcustomers/${search}`;
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );

    const body = { ...search };
    console.log(body);

    const params = new HttpParams({
      fromObject: JSON.parse(JSON.stringify(body)),
    });

    return this.http.post<any>(route, params, { headers });
  }

  public getAuth(): Observable<any> {
    const route = `${this.url}auth`;
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );

    return this.http.get<any>(route, { headers });
  }

  public getCustomer(): Observable<any> {
    const route = `${this.url}customers`;
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );

    return this.http.get<any>(route, { headers });
  }


}
