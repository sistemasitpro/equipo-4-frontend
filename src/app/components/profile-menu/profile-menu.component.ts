/* eslint-disable prettier/prettier */
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.css']
})
export class ProfileMenuComponent {
  handleLogout() {
    sessionStorage.removeItem('token')
    window.location.reload()
    console.log('logout');
  }
}
