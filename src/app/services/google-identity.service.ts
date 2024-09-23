import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleIdentityService {
  isLoggedIn = false;
  user: any;
  user$ = new Subject();
  private idToken = '';
  login() {
    const google = (window as unknown as any).google;
    google.accounts.id.initialize({
      client_id: '',
      callback: (data: any) => {
        if (data?.credential) {
          this.isLoggedIn = true;
          this.idToken = data.credential;
          this.user = JSON.parse(atob(data.credential.split('.')[1]));
          localStorage.setItem('shopXLoggedInUser', atob(data.credential.split('.')[1]));
          this.user$.next(this.user);
        }
      }
    });
    google.accounts.id.prompt();
    return Promise.resolve(this.user);
  }

  logout() {
    const google = (window as unknown as any).google;
    google.accounts.id.disableAutoSelect();
    this.isLoggedIn = false;
    this.idToken = '';
    localStorage.removeItem('shopXLoggedInUser');
    this.user$.next(undefined);
  }

  getIdToken() {
    return this.idToken;
  }
}
