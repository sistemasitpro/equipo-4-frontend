import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { CookieService } from 'ngx-cookie-service'
import { SharedService } from './shared.service'

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
    private cookieService: CookieService,
    private sharedService: SharedService,
  ) {
    const userDataString = this.cookieService.get('userData')
    if (userDataString) {
      const userData = JSON.parse(userDataString)
      this.sharedService.setUserUuid(userData.uuid)
      this.authenticatedUserUuid = userData.uuid
      this.authenticatedUserName = userData.name
    }
    const storedToken = sessionStorage.getItem('token')
    if (storedToken) {
      this.sharedService.setHeaders(storedToken)
      this.isAuthenticatedSubject.next(true)
    }
  }

  login(token: string, uuid: string, name: string, refreshToken: string) {
    sessionStorage.setItem('token', token)
    this.sharedService.setHeaders(token)
    this.sharedService.setUserUuid(uuid)
    this.authenticatedUserUuid = uuid
    this.authenticatedUserName = name
    this.refreshToken = refreshToken
    this.isAuthenticatedSubject.next(true)
    this.cookieService.set('userData', JSON.stringify({ uuid, name }))
  }

  refreshAccessToken() {
    const refreshToken = this.refreshToken
    if (!refreshToken) {
      return
    }
  }

  logout() {
    sessionStorage.removeItem('token')
    this.authenticatedUserUuid = ''
    this.authenticatedUserName = ''
    this.refreshToken = ''
    this.isAuthenticatedSubject.next(false)
    this.sharedService.setHeaders('')
    this.cookieService.delete('userData')
  }
}
