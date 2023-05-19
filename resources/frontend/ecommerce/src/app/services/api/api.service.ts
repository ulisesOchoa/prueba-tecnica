import { Injectable } from '@angular/core';
import { LoginI } from '../../models/login.interface';
import { ResponseI } from '../../models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://127.0.0.1/api/";

  constructor(private http:HttpClient) { }

  login(email: string, password: string): Observable<ResponseI>{
    const route = this.url + "login";
    const body = { email, password }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<ResponseI>(route, body, {headers})
  }
}
