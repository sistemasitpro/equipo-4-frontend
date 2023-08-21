/* eslint-disable prettier/prettier */
import { Component } from '@angular/core'
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-and-register',
  templateUrl: './login-and-register.component.html',
  styleUrls: ['./login-and-register.component.css'],
})
export class LoginAndRegisterComponent {
  mostrarRegistro: boolean = false
  isAuthenticated!: boolean

  constructor(
    private authService: AuthService,
    private router: Router,
    ) {
    this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
      if (!isAuthenticated) {
        this.router.navigate(['/ingresar']);
      } else {
        this.router.navigate(['/inicio']);
        console.log('Logged in', this.isAuthenticated);
      }
    });
  }

  handleForms() {
    this.mostrarRegistro = !this.mostrarRegistro
  }
}
