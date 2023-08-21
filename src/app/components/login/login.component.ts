/* eslint-disable prettier/prettier */
import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { LoginResp } from '../../interfaces/user.interface'
import { AuthService } from '../../services/auth.service'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup

  constructor(
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) // eslint-disable-next-line no-empty-function
  {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false],
    })

    const token = sessionStorage.getItem('token')
    if (token) {
      this.router.navigate(['/home'])
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value
      const observer = {
        next: (response: LoginResp) => {
          const res = {
            accessToken: response.accessToken,
            uuid: response.uuid,
            name: response.name,
            refreshToken: response.refreshToken,
          }

          this.authService.login(
            res.accessToken,
            res.uuid,
            res.name,
            res.refreshToken,
          )
          console.log('Logged in:', response)
          this.router.navigate(['/inicio'])
          console.log(response)
        },
        error: (error: Error) => {
          console.log(error)
        },
        complete: () => {
          console.log('complete')
          
        },
      }
      console.log(formData)
      this.userService.signIn(formData).subscribe(observer)
    }
  }
}
