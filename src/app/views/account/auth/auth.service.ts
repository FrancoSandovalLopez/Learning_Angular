import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserResponse } from '@app/shared/models/user.interface';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedId = new BehaviorSubject<boolean>(false);
  private headers = { 'content-type': 'application/json' };

  constructor(private http: HttpClient) {
    this.checkToken();
  }

  get isLgged(): Observable<boolean> {
    return this.loggedId.asObservable();
  }

  login(authData: User): Observable<UserResponse | void> {
    const body = {
      email: authData.email,
      password: authData.password,
    };

    return this.http
      .post<any>(`${environment.API_URL}/auth/login`, JSON.stringify(body), {
        headers: this.headers,
      })
      .pipe(
        map((res: UserResponse) => {
          //console.log('RES ->', res);
          this.saveToken(res.token);
          this.loggedId.next(true);
          return res;
        }),
        catchError((err) => this.handleError(err))
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loggedId.next(false);
    //set userLogged = false;
  }

  private checkToken(): void {
    const userToken = JSON.parse(localStorage.getItem('token') || '{}');
    /*
     * IF ISTOKENEXPIRED() RETURN TRUE
     * THAT MEANS THAT THE USER HAS LOGOUT
     */
    const isExpired = helper.isTokenExpired(userToken);
    console.log('isExpired =>', isExpired);
    isExpired ? this.logout() : this.loggedId.next(true);
  }

  private saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  private handleError(err: any): Observable<never> {
    let errorMessage = 'An error ocurrend while retrienving data';
    if (err) errorMessage = `Error: Code ${err.message} `;
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
