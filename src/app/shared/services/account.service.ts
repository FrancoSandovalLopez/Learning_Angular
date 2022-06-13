import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.interface';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  private apiURL = 'http://localhost:8080/readUser/1'
  constructor(private http: HttpClient) { }
  
  getUser():Observable<any>{
    return this.http.get<User>(this.apiURL);
  }

}
