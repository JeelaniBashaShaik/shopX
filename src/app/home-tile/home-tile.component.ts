import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'home-tile',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './home-tile.component.html',
  styleUrl: './home-tile.component.scss'
})
export class HomeTileComponent {

  @Input() imagePath!: string;
  @Input() title!: string;
  @Input() routeLink!: string;

}
