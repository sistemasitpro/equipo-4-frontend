import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from './../../environments/environment'
import {
  CreateUserResp,
  CreateUserRq,
  LoginResp,
  LoginRq,
  LogoutResp,
} from '../interfaces/user.interface'
import { PetResp, PetRq } from '../interfaces/pet.interface'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {
    // ..
  }

  signIn(loginRq: LoginRq): Observable<LoginResp> {
    const body = {
      email: loginRq.email,
      password: loginRq.password,
    }
    const url = `${environment.ENDPOINTS.USER.SIGN_IN}`

    return this.http.post<LoginResp>(url, body)
  }

  refreshAccessToken(refreshToken: string): Observable<unknown> {
    const url = `${environment.ENDPOINTS.USER.REFRESH_TOKEN}`
    const body = { refreshToken }

    return this.http.post(url, body)
  }

  signUp(creatUserRq: CreateUserRq): Observable<CreateUserResp> {
    const body = creatUserRq

    const url = `${environment.ENDPOINTS.USER.SIGN_UP}`

    return this.http.post<CreateUserResp>(url, body)
  }

  logout(token: string): Observable<LogoutResp> {
    const url = `${environment.ENDPOINTS.USER.LOGOUT}`
    const headers = {
      Authorization: `Bearer ${token}`,
    }
    return this.http.post<LogoutResp>(url, {}, { headers })
  }

  createPet(createPet: PetRq, token: string): Observable<PetResp> {
    const body = createPet
    const headers = {
      Authorization: `Bearer ${token}`,
    }
    console.log('createPet', body)
    const url = `${environment.ENDPOINTS.USER.CREATE_PET}`

    return this.http.post<PetResp>(url, body, { headers })
  }
}
