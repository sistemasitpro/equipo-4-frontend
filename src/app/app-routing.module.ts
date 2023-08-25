/* eslint-disable prettier/prettier */
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { LoginAndRegisterComponent } from './pages/login-and-register/login-and-register.component'
import { VeterinariesComponent } from './pages/veterinaries/veterinaries.component'
import { RegisterPetComponent } from './pages/register-pet/register-pet.component'

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'ingresar', component: LoginAndRegisterComponent },
  { path: 'veterinarias', component: VeterinariesComponent },
  { path: 'registrar-mascota', component: RegisterPetComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', redirectTo: '/inicio' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
