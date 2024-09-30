import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'home-tile',
  standalone: true,
  imports: [MatCardModule, RouterModule],
  templateUrl: './home-tile.component.html',
  styleUrl: './home-tile.component.scss',
  animations: [
    trigger('cardAnimation', [
      state('normal', style({
        transform: 'scale(1)',
        opacity: 1
      })),
      state('hovered', style({
        transform: 'scale(1.15)',
        opacity: 0.8
      })),
      state('clicked', style({
        transform: 'scale(1)',
        opacity: 1
      })),
      transition('normal <=> hovered', [
        animate('200ms ease')
      ]),
      transition('hovered <=> clicked', [
        animate('200ms ease-in')
      ])
    ])
  ]
})
export class HomeTileComponent {

  @Input() imagePath!: string;
  @Input() title!: string;
  @Input() routeLink!: string;

  router = inject(Router);
  state = 'normal';

  setState(newState: string) {
    this.state = newState;
  }

}
