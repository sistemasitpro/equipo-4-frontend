import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service'
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.css'],
})
export class ProfileMenuComponent {
  @Input() userName!: string
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
  ) {
    // ..
  }

  handleLogout() {
    const token = sessionStorage.getItem('token') || ''
    this.userService.logout(token).subscribe(() => {
      setTimeout(() => {
        this.authService.logout()
        this.router.navigate(['/ingresar'])
      }, 1000)
    })
  }
}
