import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: any;

  constructor(public _auth: AuthService) { }

  ngOnInit() {
    this.user = {
      username: '',
      password: '',
    };
  }

  login() {
    this._auth.login(this.user);
    console.log('auth token:', this._auth.token)
  }

}
