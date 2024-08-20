import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleIdentityService {
  isLoggedIn = false;
  user: any;
  
  login() {
    const google = (window as unknown as any).google;
    google.accounts.id.initialize({
      client_id: '874718926305-rc7qeb6qabqtea38oj2s2lqu522kq8gc.apps.googleusercontent.com',
      callback: (data: any) => {
        if (data?.credential) {
          this.isLoggedIn = true;
          this.user = JSON.parse(atob(data.credential.split('.')[1]));
          localStorage.setItem('shopXLoggedInUser', atob(data.credential.split('.')[1]));
        }
      }
    });
    google.accounts.id.prompt();
  }

  logout() {
    const google = (window as unknown as any).google;
    google.accounts.id.disableAutoSelect();
    this.isLoggedIn = false;
  }
}
