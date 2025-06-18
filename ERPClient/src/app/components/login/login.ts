import { Component } from '@angular/core';
import { SharedModule } from '../../modules/shared-module';
import { LoginModel } from '../../models/login.model';

import { LoginResponseModel } from '../../models/login.response.model';
import { Router } from '@angular/router';
import { Http } from '../../services/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  model : LoginModel = new LoginModel();

  constructor(
    private http: Http,
    private router : Router) {}

  signIn() {
    this.http.post<LoginResponseModel>("Auth/Login", JSON.stringify(this.model), (res) => {
      localStorage.setItem('token', res.token);
      this.router.navigateByUrl("/");
    })
  }
  }