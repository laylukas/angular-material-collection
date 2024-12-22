import { Component, ViewChild } from '@angular/core';

import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidnav',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './sidnav.component.html',
  styleUrl: './sidnav.component.scss'
})
export class SidnavComponent {
  @ViewChild('snav') sidenav!: MatSidenav;

  toggleSidenav() {
    console.log('Toggling sidenav');
    this.sidenav.toggle();
  }
}
