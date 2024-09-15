import { Component, inject } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {MatIconModule} from '@angular/material/icon';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import { HomeTileComponent } from '../home-tile/home-tile.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, HomeTileComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  homeTiles = [
    {
      imagePath: '../assets/images/laser_house.jpeg',
      title: 'DIY toy houses'
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
    /*   const user = localStorage.getItem('shopXLoggedInUser')
      if(user) {
        console.log(user, 'from storage')
      }
 */
      this.breakpointObserver.observe([
        'Small',
        'Medium',
        'Large',
        'XLarge'
      ]).subscribe(result => {
        console.log(result);
      })
  }
}
