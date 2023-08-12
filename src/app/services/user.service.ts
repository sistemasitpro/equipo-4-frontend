/* eslint-disable prettier/prettier */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateUserResp, CreateUserRq, LoginResp, LoginRq } from '../interfaces/user.interface'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // eslint-disable-next-line no-empty-function
  constructor(private http: HttpClient) {}

  signIn(loginRq: LoginRq): Observable<LoginResp> {
    const body = {
      email: loginRq.email,
      password: loginRq.password,
    };
    const url = '/api/user/signin';

    return this.http.post<LoginResp>(url, body);
  }

  signUp(creatUserRq: CreateUserRq): Observable<CreateUserResp> {
    const body = {
      name: creatUserRq.name,
      email: creatUserRq.email,
      phone_number: creatUserRq.phone_number,
      address: creatUserRq.address,
      password: creatUserRq.password,
      city_id: creatUserRq.city_id,
    };
    const url = '/api/user';

    return this.http.post<CreateUserResp>(url, body);
  }

}
