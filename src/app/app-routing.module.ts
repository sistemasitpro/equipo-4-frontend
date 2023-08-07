import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './pages/login/login.component'
import { HomeComponent } from './pages/home/home.component'
import { LoginAndRegisterComponent } from './pages/login-and-register/login-and-register.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path:'registerAndLogin',component:LoginAndRegisterComponent },
  { path: '', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/home' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
