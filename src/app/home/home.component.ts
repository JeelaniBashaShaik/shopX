import { Component, inject } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {MatIconModule} from '@angular/material/icon';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import { HomeTileComponent } from '../home-tile/home-tile.component';
import { GoogleIdentityService } from '../services/google-identity.service';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, HomeTileComponent, MatMenuModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  googleIdentityService = inject(GoogleIdentityService);

  isAccountPopupVisible = false;
  user!: any;

  homeTiles = [
    {
      imagePath: '../assets/images/laser_house.jpeg',
      title: 'Toy houses'
    },
    {
      imagePath: '../assets/images/laser_art.jpg',
      title: 'Wall art',
    },
    {
      imagePath: '../assets/images/laser_maze.avif',
      title: 'Mazes'
    },
    {
      imagePath: '../assets/images/laser_box.jpg',
      title: 'Storage boxes'
    },
    {
      imagePath: '../assets/images/laser_lamp.jpg',
      title: 'Lamps'
    },
  ]

  breakpointObserver = inject(BreakpointObserver)
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

      this.breakpointObserver.observe([
        'Small',
        'Medium',
        'Large',
        'XLarge'
      ]).subscribe(result => {
        console.log(result);
      })
  }

  login() {
    this.googleIdentityService.login();
  }

  logout() {
    this.googleIdentityService.logout();
    this.user = {};
  }
}
