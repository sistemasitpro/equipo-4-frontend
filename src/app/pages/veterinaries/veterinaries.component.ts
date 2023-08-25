import { Component, OnInit } from '@angular/core'
import { Veterinary } from 'src/app/interfaces/veterinary.interface'
import { VETERINARIES } from 'src/app/mocks/veterinaries.mock'

@Component({
  selector: 'app-veterinaries',
  templateUrl: './veterinaries.component.html',
  styleUrls: ['./veterinaries.component.css'],
})
export class VeterinariesComponent implements OnInit {
  veterinaries: Veterinary[] = []
  showPaginator!: boolean
  showSkeleton!: boolean

  constructor() {
    // ..
  }

  ngOnInit(): void {
    this.getVeterinaries()
  }

  getVeterinaries() {
    this.showSkeleton = true
    setTimeout(() => {
      this.veterinaries = VETERINARIES
      this.showSkeleton = false
    }, 800)
  }
}
