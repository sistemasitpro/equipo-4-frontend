import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from './../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class VeterinaryService {
  constructor(private http: HttpClient) {
    // ..
  }

  createVeterinary(veterinary: any) {
    const body = veterinary

    const url = `${environment.ENDPOINTS.VETERINARY.CREATE}`
    return this.http.post(url, body)
  }

  loginVeterinary(email: string, password: string) {
    const body = {
      email: email,
      password: password,
    }
    const url = `${environment.ENDPOINTS.VETERINARY.LOGIN}`
    return this.http.post(url, body)
  }

  getVeterinaries() {
    const url = `${environment.ENDPOINTS.VETERINARY.LIST}`
    return this.http.get(url)
  }
}
