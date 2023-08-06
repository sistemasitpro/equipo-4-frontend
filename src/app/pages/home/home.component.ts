import { Component } from '@angular/core'
import { Veterinary } from 'src/app/interfaces/veterinary.interface'
import { VETERINARIES } from 'src/app/mocks/veterinaries.mock'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  veterinaries: Veterinary[] = VETERINARIES
  showPaginator = false
}
