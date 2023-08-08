import { Component } from '@angular/core'

@Component({
  selector: 'app-login-and-register',
  templateUrl: './login-and-register.component.html',
  styleUrls: ['./login-and-register.component.css'],
})
export class LoginAndRegisterComponent {
  mostrarRegistro: boolean = false

  mostrarLogin() {
    this.mostrarRegistro = false
  }

  mostrarRegistroComponente() {
    this.mostrarRegistro = true
  }
}
