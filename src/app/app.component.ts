/* eslint-disable prettier/prettier */
import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  showHeader!: boolean;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
    // ...
  }

  ngOnInit() {
    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.showHeader = !isAuthenticated || this.shouldShowHeader(this.router.url);
    });

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationStart))
        .subscribe((event) => {
        this.showHeader = this.shouldShowHeader((event as NavigationStart).url);
      });
  }


  private shouldShowHeader(url: string): boolean {
    return url !== '/ingresar';
  }
}
