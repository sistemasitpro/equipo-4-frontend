/* eslint-disable prettier/prettier */
import { Component } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'
import { filter } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showHeader = false
  constructor(private router: Router) {
    this.router.events
      .pipe(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        filter((event: any) => event instanceof NavigationEnd),
      )
      .subscribe((x) => {
        this.showHeader = x.url !== '/sign-in-up'
      })
  }

}
