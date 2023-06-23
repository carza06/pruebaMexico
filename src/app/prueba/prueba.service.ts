
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Prueba } from './prueba';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  private apiURL = "http://127.0.0.1:8000/api/prueba";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Prueba[]> {
   return this.httpClient.get<Prueba[]>(this.apiURL+'/getprueba')
   .pipe(
     catchError(this.errorHandler)
   )
 }

 test(): Observable<Prueba[]> {
  return this.httpClient.get<Prueba[]>(this.apiURL +'/getIp')
  .pipe(
    catchError(this.errorHandler)
  )
}

 errorHandler() {
   let errorMessage = '';
   return throwError(errorMessage);
 }

}