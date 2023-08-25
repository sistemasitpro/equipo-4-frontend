/* eslint-disable prettier/prettier */
import { Component } from '@angular/core'
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  sessionOn!: boolean
  userName!: string

  constructor(private authService: AuthService) {
    this.userName = this.authService.authenticatedUserName
    console.log(this.userName)
    console.log(sessionStorage.getItem('token'))
    const token = sessionStorage.getItem('token')
    if (token) {
      this.sessionOn = true
    } else {
      this.sessionOn = false
      this.userName = ''
    }
  }
}
