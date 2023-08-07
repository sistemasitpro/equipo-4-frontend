import { Component, Input } from '@angular/core'
import { Veterinary } from '../../interfaces/veterinary.interface'
import { PageEvent } from '@angular/material/paginator'
import { MatPaginatorIntl } from '@angular/material/paginator'

@Component({
  selector: 'veterinaries-card',
  templateUrl: './veterinaries-card.component.html',
  styleUrls: ['./veterinaries-card.component.css'],
})
export class VeterinariesCardComponent {
  @Input() veterinaries: Veterinary[] = []
  @Input() showPaginator = true
  maxVeterinariesToShow = 2
  maxServicesToShow = 3

  pageSize = 6
  pageIndex = 0

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize
    this.pageIndex = event.pageIndex
  }

  getDisplayedVeterinaries(): Veterinary[] {
    const startIndex = this.pageIndex * this.pageSize
    return this.veterinaries.slice(startIndex, startIndex + this.pageSize)
  }

  constructor(private paginatorIntl: MatPaginatorIntl) {
    this.paginatorIntl.itemsPerPageLabel = 'Elementos por página:'
    this.paginatorIntl.nextPageLabel = 'Siguiente página'
    this.paginatorIntl.previousPageLabel = 'Página anterior'
    this.paginatorIntl.getRangeLabel = this.spanishRangeLabel
  }

  spanishRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0 || pageSize === 0) {
      return `0 de ${length}`
    }

    length = Math.max(length, 0)
    const startIndex = page * pageSize
    const endIndex =
      startIndex < length
        ? Math.min(startIndex + pageSize, length)
        : startIndex + pageSize
    return `${startIndex + 1} - ${endIndex} de ${length}`
  }
}
