import { Component } from '@angular/core'
import { Veterinary } from 'src/app/interfaces/veterinary.interface'
import { VETERINARIES } from 'src/app/mocks/veterinaries.mock'

@Component({
  selector: 'app-veterinaries',
  templateUrl: './veterinaries.component.html',
  styleUrls: ['./veterinaries.component.css'],
})
export class VeterinariesComponent {
  veterinaries: Veterinary[] = VETERINARIES
  showPaginator = true
}
