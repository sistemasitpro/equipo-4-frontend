/* eslint-disable prettier/prettier */
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/internal/Observable'
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
  // eslint-disable-next-line no-empty-function
  constructor(private httpClient: HttpClient) { }

}
@Injectable({
  providedIn: 'root',
})
export class LoginService {


  // eslint-disable-next-line no-empty-function
  constructor(private http: HttpClient) { }

  login(email:string, password:string): Observable<any>{


    const body =
      {
        email:email,
        password :password
    }



    return this.http.post("https://reqres.in/api/login",body)

  }
}
