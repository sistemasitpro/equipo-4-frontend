/* eslint-disable prettier/prettier */
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.css']
})
export class ProfileMenuComponent {
  userName: string | null = 'Pepito'
  constructor(
    private authService: AuthService,
  ) {
    this.userName = this.authService.authenticatedUserName
    console.log(this.userName);
  }


  handleLogout() {
    this.authService.logout();
    console.log('logout');
  }
}
