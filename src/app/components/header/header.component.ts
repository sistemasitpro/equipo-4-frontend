/* eslint-disable prettier/prettier */
import { Component } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  sessionOn!: boolean

  constructor() {
    const token = sessionStorage.getItem('token')
    if (token) {
      this.sessionOn = true
    }
  }

}
