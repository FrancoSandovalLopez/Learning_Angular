import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserResponse } from '@app/shared/models/user.interface';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private headers = {'content-type': 'application/json'}

  constructor(private http: HttpClient) { }

  registerUser(user: User){
    const body = {
      email: user.email,
      password: user.password,
    };

    return this.http
      .post<any>(`${environment.API_URL}/user/createUser`, JSON.stringify(body), {
        headers: this.headers,
      })
      .pipe(
        catchError((err) => this.handleError(err))
      );
  }


  private handleError(err: any): Observable<never> {
    let errorMessage = 'An error ocurrend while retrienving data';
    if (err) errorMessage = `Error: Code ${err.message} `;
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
