/* eslint-disable prettier/prettier */
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Angular
import { MatPaginatorModule } from '@angular/material/paginator'; // Import the MatPaginatorModule


import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './components/login/login.component'
import { HeaderComponent } from './components/header/header.component'
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginAndRegisterComponent } from './pages/login-and-register/login-and-register.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { ButtonCustomerAreaComponent } from './components/button-customer-area/button-customer-area.component';
import { VeterinariesCardComponent } from './components/veterinaries-card/veterinaries-card.component';
import { VeterinariesComponent } from './pages/veterinaries/veterinaries.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileMenuComponent } from './components/profile-menu/profile-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    NavbarComponent,
    RegisterComponent,  
    ButtonCustomerAreaComponent,
    VeterinariesCardComponent,
    VeterinariesComponent,
    LoginAndRegisterComponent,
    FooterComponent,
    ProfileMenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
