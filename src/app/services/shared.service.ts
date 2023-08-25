import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  headers = {}
  authenticatedUserUuid = ''

  private tokenSubject = new BehaviorSubject<string | null>(null)

  constructor() {
    // ..
  }

  setHeaders(token: string): void {
    this.headers = {
      Authorization: `Bearer ${token}`,
    }
    this.tokenSubject.next(token)
  }

  setUserUuid(uuid: string): void {
    this.authenticatedUserUuid = uuid
  }

  getTokenObservable(): Observable<string | null> {
    return this.tokenSubject.asObservable()
  }
}
