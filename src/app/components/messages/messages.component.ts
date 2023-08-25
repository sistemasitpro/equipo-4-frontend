import { Component, Input } from '@angular/core'

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent {
  @Input() message!: string
}
