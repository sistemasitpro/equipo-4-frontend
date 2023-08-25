import { Component } from '@angular/core'
import { Veterinary } from 'src/app/interfaces/veterinary.interface'
import { VeterinaryService } from 'src/app/services/veterinary.service'
import { HotToastService } from '@ngneat/hot-toast'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  veterinaries: Veterinary[] = []
  showPaginator!: boolean
  showSkeleton!: boolean
  noInfo!: boolean
  message = 'No se encontró información.'
  constructor(
    private veterinaryService: VeterinaryService,
    private toast: HotToastService,
  ) {
    // ..
  }

  ngOnInit() {
    this.getVeterinaries()
    // this.createVeterinary()
    // this.loginVeterinary()
  }

  getVeterinaries() {
    this.showSkeleton = true
    setTimeout(() => {
      this.showSkeleton = false
      this.noInfo = true
      this.veterinaryService.getVeterinaries().subscribe((response: any) => {
        this.veterinaries = response
      })
    }, 700)
  }

  createVeterinary() {
    const objetoEjemplo = {
      name: 'Veterinaria de prueba',
      address: 'Calle de prueba',
      nif_cif: '21578327A',
      description: 'Este campo es requerido.',
      city_id: 1,
      email: 'correo@asdas.es',
      phone_number: '+34 965214578',
      password: 'Correo1234!',
    }
    this.veterinaryService.createVeterinary(objetoEjemplo).subscribe(
      (response: any) => {
        console.log('response', response)
        this.getVeterinaries()
      },
      (error) => {
        console.log('error', error)
      },
    )
  }

  loginVeterinary() {
    const email = 'correo@asdas.es'
    const password = 'Correo1234!'
    this.veterinaryService.loginVeterinary(email, password).subscribe(
      (response: any) => {
        console.log('response', response)
      },
      (error) => {
        console.log('error', error)
      },
    )
  }
}
