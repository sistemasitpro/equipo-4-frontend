import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { CookieService } from 'ngx-cookie-service'
import { UserService } from './user.service'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false)
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable()
  public authenticatedUserUuid: string = ''
  public authenticatedUserName: string = ''
  public refreshToken: string = ''

  constructor(
    private userService: UserService,
    private cookieService: CookieService,
  ) {
    const userDataString = this.cookieService.get('userData')
    if (userDataString) {
      const userData = JSON.parse(userDataString)
      this.authenticatedUserUuid = userData.uuid
      this.authenticatedUserName = userData.name
    }
  }

  login(token: string, uuid: string, name: string, refreshToken: string) {
    sessionStorage.setItem('token', token)
    this.authenticatedUserUuid = uuid
    this.authenticatedUserName = name
    this.refreshToken = refreshToken
    this.isAuthenticatedSubject.next(true)
    this.cookieService.set('userData', JSON.stringify({ uuid, name }))
  }

  refreshAccessToken() {
    // Simula una solicitud de servidor para obtener un nuevo access token usando el refresh token
    const refreshToken = this.refreshToken // Obtén el refresh token almacenado
    if (!refreshToken) {
      console.log('No refresh token available')
      return
    }

    // Realizar una solicitud al servidor para obtener un nuevo access token usando el refresh token
    this.userService.refreshAccessToken(refreshToken).subscribe(
      (response: any) => {
        const newAccessToken = response.newAccessToken // Ajusta esto según la respuesta real del servidor
        sessionStorage.setItem('token', newAccessToken)
        console.log('Access token refreshed')
      },
      (error: any) => {
        console.log('Error refreshing access token', error)
      },
    )
  }

  logout() {
    sessionStorage.removeItem('token')
    this.authenticatedUserUuid = ''
    this.authenticatedUserName = ''
    this.refreshToken = ''
    this.isAuthenticatedSubject.next(false)
    this.cookieService.delete('userData')
  }
}
