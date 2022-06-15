import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserResponse } from '@app/shared/models/user.interface';
import { Console } from 'console';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) { }
  
  login(authData: User):Observable<UserResponse | void>{
    return this.http
    .post<UserResponse>(`${environment.API_URL}/auth/login`, authData)
    .pipe(
      map( (res:UserResponse) => {
        console.log('RES ->', res);
      }),
      catchError((err) => this.handleError(err))
    );
  }
  logout():void{}
  private readToken(): void{}
  private sabeToken(): void{}
  private handleError(err: any): Observable<never>{
   let errorMessage = 'An error ocurrend while retrienving data';
   if(err)
    errorMessage = `Error: Code ${err.message} `;
    window.alert(errorMessage);
    return throwError(errorMessage)
  }
}
