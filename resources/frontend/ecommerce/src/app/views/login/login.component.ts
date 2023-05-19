import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services/api/api.service';
import { LoginI } from '../../models/login.interface';
import { ResponseI } from '../../models/response.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private api: ApiService, private router: Router) {}
  errorStatus: boolean = false;
  errorMsg: any = '';

  ngOnInit():void {	
	this.checkLocalStorage();
  }

  checkLocalStorage(){
	if (localStorage.getItem('token')) {
		this.router.navigate(['home']);	
	}
  }

  onLogin(data: any) {
    this.api.login(data.email, data.password).subscribe(
      (response) => {
        if (response.status === 200) {
          localStorage.setItem('token', response.data.token);
          this.router.navigate(['home']);
        } else {
          this.errorStatus = true;
          this.errorMsg = response.message;
        }
      },
      (error) => {
        console.log(error);

        this.errorStatus = true;
        this.errorMsg = error.error.message;
      }
    );
  }
}
