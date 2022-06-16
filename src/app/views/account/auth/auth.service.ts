import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserResponse } from '@app/shared/models/user.interface';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private headers = {'content-type': 'application/json'}

  constructor(private http: HttpClient) { }

  login(authData: User):Observable<UserResponse | void>{

    const body = {
      email: authData.email,
      password: authData.password
    }

    return this.http
    .post<any>(`${environment.API_URL}/auth/login`, JSON.stringify(body), {'headers': this.headers})
    .pipe(
      map( (res:UserResponse) => {
        console.log('RES ->', res);
      }),
      catchError((err) => this.handleError(err))
    );
  }

  logout():void{}
  private readToken(): void{}
  private saveToken(): void{}
  private handleError(err: any): Observable<never>{
   let errorMessage = 'An error ocurrend while retrienving data';
   if(err)
    errorMessage = `Error: Code ${err.message} `;
    window.alert(errorMessage);
    return throwError(errorMessage)
  }
}
