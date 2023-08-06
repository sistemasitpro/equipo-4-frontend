/* eslint-disable prettier/prettier */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

   // eslint-disable-next-line no-empty-function
   constructor(private http: HttpClient) { }

   register(email:string, password:string, address:string, phone:number, name:string): Observable<any>{


     const body =
       {
         email:email,
         password :password,
         address : address,
         phone : phone,
         name: name,

     }



     return this.http.post("https://localhost/user/register",body)

   }
}
