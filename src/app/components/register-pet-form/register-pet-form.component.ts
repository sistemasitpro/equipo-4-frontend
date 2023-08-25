import { Component } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { RegistrationErrors } from 'src/app/interfaces/error-response.interface'
import { PetRq } from 'src/app/interfaces/pet.interface'
import { CreateUserResp } from 'src/app/interfaces/user.interface'
import { AuthService } from 'src/app/services/auth.service'
import { UserService } from 'src/app/services/user.service'
@Component({
  selector: 'register-pet-form',
  templateUrl: './register-pet-form.component.html',
  styleUrls: ['./register-pet-form.component.css'],
})
export class RegisterPetFormComponent {
  registrationForm!: FormGroup
  hasError!: boolean
  hasSuccess!: boolean
  successMessage!: string
  registrationErrors: RegistrationErrors = {}

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private authService: AuthService,
  ) {
    // ..
  }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: [0, [Validators.required]],
      type_pet: ['', Validators.required],
      specie: ['', Validators.required],
      preexisting_conditions: [''],
    })
  }

  onSubmit() {
    const token = sessionStorage.getItem('token') || ''
    if (this.registrationForm.valid) {
      const formData: PetRq = {
        name: this.registrationForm.value.name,
        age: this.registrationForm.value.age,
        type_pet: this.registrationForm.value.type_pet,
        specie: this.registrationForm.value.specie,
        preexisting_conditions:
          this.registrationForm.value.preexisting_conditions,
        user_uid: this.authService.authenticatedUserUuid,
      }

      const observer = {
        next: (response: CreateUserResp) => {
          console.log(response)
          this.hasError = false
          this.hasSuccess = true
          this.successMessage = response.message
        },
        error: (error: any) => {
          console.log(error)
          this.hasError = true
          this.registrationErrors = error.error
        },
        complete: () => {
          setTimeout(() => {
            this.router.navigate(['/login'])
          }, 2000)
        },
      }
      this.userService.createPet(formData, token).subscribe(observer)
    }
  }
}
