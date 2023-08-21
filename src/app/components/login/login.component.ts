/* eslint-disable prettier/prettier */
import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { LoginResp } from '../../interfaces/user.interface'
import { AuthService } from '../../services/auth.service'
import { UserService } from '../../services/user.service'
import { ErrorService } from 'src/app/interfaces/error-response.interface'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  hasError!: boolean
  errorMessage!: string
  buttonColor!: string;

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
          this.router.navigate(['/inicio'])
        },
        error: (error: ErrorService) => {
          console.log(error)
          this.hasError = true
          this.errorMessage = error.error.message 
        },
        complete: () => {
          // ...
        },
      }
      console.log(formData)
      this.userService.signIn(formData).subscribe(observer)
    }
  }
}
