/* eslint-disable prettier/prettier */
/* eslint-disable no-empty-function */
import { Component, OnInit } from '@angular/core'
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms'
import { Router } from '@angular/router'
import { City, Province } from 'src/app/interfaces/geographic-data.intereface'
import { CreateUserResp, CreateUserRq } from 'src/app/interfaces/user.interface'
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup
  provinces: Province[] = [
    { value: 0, label: 'Provincias' },
    { value: 1, label: 'A Coruña' },
    { value: 2, label: 'Álava' },
    { value: 3, label: 'Albacete' },
    { value: 4, label: 'Alicante/Alacant' },
    { value: 5, label: 'Almería' },
    { value: 6, label: 'Asturias' },
    { value: 7, label: 'Ávila' },
    { value: 8, label: 'Badajoz' },
    { value: 9, label: 'Barcelona' },
    { value: 10, label: 'Burgos' },
  ]

  cities: City[] = [
    { city_id: 0, label: 'Ciudades' },
    { city_id: 1, label: 'Madrid' },
    { city_id: 2, label: 'Barcelona' },
    { city_id: 3, label: 'Valencia' },
    { city_id: 4, label: 'Sevilla' },
    { city_id: 5, label: 'Zaragoza' },
    { city_id: 6, label: 'Málaga' },
    { city_id: 7, label: 'Murcia' },
  ]

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city_id: [0, Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', [Validators.required, this.passwordsMatch.bind(this), Validators.minLength(8)]],
      confirmPassword: [
        '',
        [Validators.required, this.passwordsMatch.bind(this)],
      ],
    })
  }

  passwordsMatch(control: AbstractControl) {
    const password = control.parent?.get('password')?.value
    const confirmPassword = control.parent?.get('confirmPassword')?.value
    if (password === confirmPassword) {
      return null
    } else {
      return { passwordsDoNotMatch: true }
    }
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const formData: CreateUserRq = {
        name: this.registrationForm.value.fullName,
        email: this.registrationForm.value.email,
        phone_number: `(+34)${this.registrationForm.value.phone}` ,
        address: this.registrationForm.value.address,
        password: this.registrationForm.value.password,
        city_id: Number(this.registrationForm.value.city_id),
      }

      const observer = {
        next: (response: CreateUserResp) => {
          console.log(response)
        },
        error: (error: Error) => {
          console.log(error)
        },
        complete: () => {
          console.log('complete')
          this.router.navigate(['/login'])
        },
      }
      this.userService.signUp(formData).subscribe(observer)
      console.log('Formulario de registro enviado:', formData)
    }
  }
}
