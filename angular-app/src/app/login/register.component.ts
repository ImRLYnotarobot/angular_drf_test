import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  public register_user: any;
  public errors: any = [];
  public pass_err: string;
  private httpOptions: any;

  constructor(
    public _auth: AuthService,
    private http: HttpClient,
    private router: Router
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      })
    };
  }

  ngOnInit() {
    this.register_user = {
      username: '',
      email: '',
      password: '',
      password2: ''
    }
  }

  register() {
    if (this.register_user.password != this.register_user.password2) {
      this.pass_err = 'passwords must match!';
    } else {
      const body = new HttpParams()
        .set('username', this.register_user.username)
        .set('password', this.register_user.password)
        .set('email', this.register_user.email);

      this.http.post(this._auth.user_service_url, body.toString(), this.httpOptions).subscribe(
        data => {
          console.log('received:', data);
          if (data['id']) {
            this._auth.login(this.register_user);
          }
        },
        err => {
          this.errors = err.error;
        }
      );
    }
  }

}
