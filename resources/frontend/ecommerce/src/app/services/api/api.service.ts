import { Injectable } from '@angular/core';
import { LoginI } from '../../models/login.interface';
import { ResponseI } from '../../models/response.interface';
import { ProductListI } from '../../models/ProductList.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getAllProducts(page:number):Observable<ProductListI[]> {
    const route = this.url + 'product?page=' + page;

    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.http.get<any>(route, { headers })
  }

  paginateProducts(url:string):Observable<ProductListI[]> {
    const route = url;

    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.http.get<any>(route, { headers })
  }

  getClients() {
    const route = this.url + 'customers';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.http.get<any>(route, { headers })
  }
}
