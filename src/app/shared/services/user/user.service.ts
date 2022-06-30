import { User, UserResponse } from '@shared/models/user.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private headers = {'content-type': 'application/json'}

  constructor(private http: HttpClient) { }

  registerUser(data: User){

    let HTTPOptions:Object = {

      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      }),
      responseType: 'text'
   }

    const body = {
      email: data.email,
      password: data.password,
      id_role: data.id_role
    };

    return this.http
      .post<any>(`${environment.API_URL}/user/createUser`, JSON.stringify(body), HTTPOptions)
      .pipe(
        map((res: any) => {
          return res;
        }),
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
