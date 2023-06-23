import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiURL = "http://localhost:8000/api/users";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }


  login(Users:Users[] = []): Observable<Users> {
    return this.httpClient.post<Users>(this.apiURL, JSON.stringify(Users), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


 errorHandler() {
   let errorMessage = '';
   return throwError(errorMessage);
 }

}