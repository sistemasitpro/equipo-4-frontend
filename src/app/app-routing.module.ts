/* eslint-disable prettier/prettier */
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './pages/login/login.component'
import { HomeComponent } from './pages/home/home.component'
import { VeterinariesComponent } from './pages/veterinaries/veterinaries.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'veterinarias', component: VeterinariesComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', redirectTo: '/inicio' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
