import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isSideMenuActive: boolean = false;

  openSideMenu(e): void {
    e.stopPropagation();
    this.isSideMenuActive = !this.isSideMenuActive;
    document.body.classList.toggle('is-close-menu');
  }
}
