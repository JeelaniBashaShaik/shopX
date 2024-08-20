import { Component, inject } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

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
