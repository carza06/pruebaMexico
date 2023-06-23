import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Equipment } from './equipment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  private apiURL = "http://127.0.0.1:8000/api/equipment";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Equipment[]> {
   return this.httpClient.get<Equipment[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 create(Equipment:Equipment[] = []): Observable<Equipment> {
   return this.httpClient.post<Equipment>(this.apiURL, JSON.stringify(Equipment), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id:string): Observable<Equipment> {
   return this.httpClient.get<Equipment>(this.apiURL + id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id:string, Equipment:Equipment[] = []): Observable<Equipment> {
   return this.httpClient.put<Equipment>(this.apiURL + id, JSON.stringify(Equipment), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id:string){
   return this.httpClient.delete<Equipment>(this.apiURL +'/'+ id, this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 errorHandler() {
   let errorMessage = '';
   return throwError(errorMessage);
 }

}
