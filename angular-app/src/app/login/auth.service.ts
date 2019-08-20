import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    private httpOptions: any;

    private get_token_url: string = '/o/token/';
    private client_id: string = '7UdsPUDKXJX46Bhe1OM2cPXflAsqYXvVcMKKIoBG';
    // private client_id: string = 'jvC2UqXr4b4QnXzjw0mGMrF3PglBwAr2kNY0BkYB';
    private client_secret: string = 'm33LQhdVyCqaOFNT2xCysYh3lx5J1TMisBFXPAPbq4aiNLd09UAi9z2c9ewus3zs46HGLwmiOHzkCjMA4XbD2igytZLdAACyrBJ0WsVix2jv4A7cPAblkksTwY5Z7fD6';
    // private client_secret: string = 'IlmsafogCQlNFTNZGqGmkEKLF2hJChkp1QtGeOPceZR1WytuGcFnH8yy5mh4yb6SPK4H0xvpPg2OyXuHHQ4FsWQqDeeHAhdPClRPjV54YjQkHq96RQGaGmUsjXK4HKAm';

    public user_service_url = '/accounts/register/';

    public token: string;
    public token_type: string;
    public refresh_token: string;
    public username: string;

    public errors: any=[];
    public error: any;

    constructor(private http: HttpClient, private router: Router) {
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': "Basic " + btoa(this.client_id + ':' + this.client_secret)
            })
        };
    }

    public login(user) {

        const body = new HttpParams()
        .set('grant_type', 'password')
        // .set('scope', Settings.scope)1
        .set('username', user.username)
        .set('password', user.password);

        this.http.post(this.get_token_url, body.toString(), this.httpOptions).subscribe(
            data => {
                this.token = data['access_token'];
                this.token_type = data['token_type'];
                this.refresh_token = data['refresh_token'];
                if (this.token) {
                    this.username = user.username;
                    this.router.navigate(['/todo/']);
                }
            },
            err => {
                this.error = err.error.error_description;
            }
        );
    }

    public refreshToken() {
        console.log('refreshtoken');
    }

    public logout() {
        this.token = null;
        this.refresh_token = null;
        this.token_type = null;
        this.username = null;
        this.router.navigate(['/login/']);
    }
}