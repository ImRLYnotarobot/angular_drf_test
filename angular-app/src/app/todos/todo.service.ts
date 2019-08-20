import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { Todo } from './todo';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators/';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

@Injectable()
export class TodoService {

    private httpOptions: any;
    private headers: HttpHeaders;
    private handle_error: HandleError

    private todo_api_url: string = '/api/todos';
    // private todo_api_url: string = '/some_view';

    constructor(
        private http: HttpClient,
        private router: Router,
        private _auth: AuthService,
        http_error_nandler: HttpErrorHandler
    ) {
        this.handle_error = http_error_nandler.createHandleError('TodoService');
    }

    public set_headers() {
        this.headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .set('Authorization', this._auth.token_type + ' ' + this._auth.token);
    }

    public get_todos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.todo_api_url, { headers: this.headers })
        };


    public create_todo(todo: Todo): Observable<Todo> {
        return this.http.post<Todo>(this.todo_api_url, todo, {headers: this.headers});
    };

    public delete(id: number): Observable<{}> {
        const detail_url = `${this.todo_api_url}/${id}`;
        return this.http.delete(detail_url, {headers: this.headers});
    };

    public update(obj): Observable<{}> {
        const detail_url = `${this.todo_api_url}/${obj.id}`;
        return this.http.put(detail_url, obj, {headers: this.headers});
    }

    public handleError(error: Response) {
        console.error(error);
        // return Observable.throw(error.json().error || 'Server error');
      }
}