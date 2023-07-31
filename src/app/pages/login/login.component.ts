/* eslint-disable prettier/prettier */
import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { LoginService } from 'src/app/services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  miFormValidado: FormGroup = new FormGroup({})
  password: string = 'cityslicka'
  email: string = 'eve.holt@reqres.in'
  passwordPattern = '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$'


  // eslint-disable-next-line no-empty-function
  constructor(
    private router: Router,
    private loginService: LoginService,
    private formBuilder: FormBuilder,
  ) // eslint-disable-next-line no-empty-function
  {}

  ngOnInit(): void {
    this.miFormValidado = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(this.passwordPattern),
        ]),
      ]
    })

    const token = sessionStorage.getItem('token')
    if (token) {
      this.router.navigate(['/home'])
    }
  }

  get emailForm(){
    return this.miFormValidado.get("email")
  }
  get passwordForm(){
    return this.miFormValidado.get("password")
  }

  loginUser() {
    //redicciona a la home

    this.loginService.login(this.email, this.password).subscribe(
      (response) => {
        if (response.token) {
          sessionStorage.setItem('token', response.token)
          this.router.navigate(['/home'])
          alert('Has iniciado sesion correctamente')
        }
      },
      (error: any) =>
        console.error(`Ha habido un error al hacer login: ${error}`),
      () => console.info('proceso login terminado'),
    )
  }

  enviarFormulario (){
    if(this.miFormValidado.valid){
      alert("formulario validado");
      //reseteamos los campo de formulario
      this.miFormValidado.reset();

    }
  }
}
