/* eslint-disable prettier/prettier */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  miFormValidado: FormGroup = new FormGroup({})
  password: string = 'cityslicka'
  email: string = 'eve.holt@reqres.in'
  passwordPattern = '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,20}$';



  // eslint-disable-next-line no-empty-function
  constructor(
    private router: Router,
    private loginService: LoginService,
    private formBuilder: FormBuilder,
  ) // eslint-disable-next-line no-empty-function
  {}

  ngOnInit(): void {
    this.miFormValidado = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.pattern('[A-Za-z]+')])],
      adress: ['', Validators.compose([Validators.required, Validators.pattern('^[A-Za-z0-9,.\\s]+$')])],
      phone: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]+')])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(this.passwordPattern),
        ]),
      ],
      confirmPassword: ['', [Validators.required, this.matchPasswords.bind(this)]]
    })

    const token = sessionStorage.getItem('token')
    if (token) {
      this.router.navigate(['/home'])
    }
  }

  matchPasswords(control: AbstractControl) {
    const password = control.parent?.get('password');
    const confirmPassword = control.value;
    if (password && password.value !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  }

  get nameForm(){
    return this.miFormValidado.get("email")
  }
  get emailForm(){
    return this.miFormValidado.get("email")
  }
  get addressForm(){
    return this.miFormValidado.get("password")
  }
  get phoneForm(){
    return this.miFormValidado.get("password")
  }
  get passwordForm(){
    return this.miFormValidado.get("password")
  }
  get confirmPasswordForm(){
    return this.miFormValidado.get("confirmPassword")
  }

  loginUser() {

    this.loginService.login(this.email, this.password).subscribe(
      (response) => {
        if (response.token) {
          sessionStorage.setItem('token', response.token)
          this.router.navigate(['/home'])
          alert('You have successfully logged in')
        }
      },
      (error: any) =>
        console.error(`There was an error while logging in: ${error}`),
      () => console.info('login process finished'),
    )
  }

  enviarFormulario (){
    if(this.miFormValidado.valid){
      alert('validated form');
      //reset
      this.miFormValidado.reset();

    }
  }
}
