import { Roles } from './../../models/roles.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private headers = {'content-type': 'application/json'}

  constructor(private http: HttpClient) { }

  getAllRoles(){
    return this.http
    .get<Roles[]>(`${environment.API_URL}/roles/getAllRoles`, {
      headers: this.headers
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
