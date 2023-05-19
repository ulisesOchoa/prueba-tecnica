import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    password_confirmation: new FormControl('', Validators.required),
  });

  constructor(private api: ApiService, private router: Router) {}

  errorStatus: boolean = false;
  errorMsg: any = '';

  onRegister(data: any) {
    this.api.register(data).subscribe(
      (response) => {
        console.log(response);
        if (response.status === 200) {
          localStorage.setItem('token', response.data.token);
          this.router.navigate(['login']);
        } else {
          this.errorStatus = true;
          this.errorMsg = response.message;
        }
      },
      (error) => {
        console.error(error);
        this.errorStatus = true;
        this.errorMsg = error.error.message;
      }
    );
  }
}
