/* eslint-disable prettier/prettier */
import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-and-register',
  templateUrl: './login-and-register.component.html',
  styleUrls: ['./login-and-register.component.css'],
})
export class LoginAndRegisterComponent {
  mostrarRegistro: boolean = false

  constructor(
    private router: Router,
  ) {
    const token = sessionStorage.getItem('token')
    if (token) {
      this.router.navigate(['/inicio'])
    }
  }

  mostrarLogin() {
    this.mostrarRegistro = false
  }

  mostrarRegistroComponente() {
    this.mostrarRegistro = true
  }
}
