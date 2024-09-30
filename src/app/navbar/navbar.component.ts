import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { GoogleIdentityService } from '../services/google-identity.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, MatMenuModule, CommonModule, MatButtonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  googleIdentityService = inject(GoogleIdentityService);
  isAccountPopupVisible = false;
  user!: any;

  ngOnInit() {
    this.googleIdentityService.user$.asObservable().subscribe(data => {
      this.user = data;
      console.log(this.user, 'from subs');
    })
      const user = localStorage.getItem('shopXLoggedInUser')
      if(user) {
        this.user = JSON.parse(user);
        console.log(this.user, 'from storage')
      }
  }

  login() {
    this.googleIdentityService.login();
  }

  logout() {
    this.googleIdentityService.logout();
    this.user = {};
  }
}
