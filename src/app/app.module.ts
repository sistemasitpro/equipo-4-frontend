import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/login/login.component'
import { HeaderComponent } from './components/header/header.component'
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginAndRegisterComponent } from './pages/login-and-register/login-and-register.component';
import { RegisterComponent } from './pages/register/register.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    NavbarComponent,
    LoginAndRegisterComponent,
    RegisterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
