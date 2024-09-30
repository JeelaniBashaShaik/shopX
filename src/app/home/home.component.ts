import { Component, inject } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {MatIconModule} from '@angular/material/icon';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import { HomeTileComponent } from '../home-tile/home-tile.component';
import { GoogleIdentityService } from '../services/google-identity.service';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, HomeTileComponent, MatMenuModule, MatButtonModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homeTiles = [
    {
      imagePath: '../assets/images/laser_house.jpeg',
      title: 'Toy houses'
    },
    {
      imagePath: '../assets/images/laser_letters.png',
      title: 'Educational'
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
    },{
      imagePath: '../assets/images/laser_puzzle.png',
      title: 'Puzzles'
    },
  ]

  breakpointObserver = inject(BreakpointObserver)
  ngOnInit() {
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
