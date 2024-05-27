import { Component } from '@angular/core';
import { AuthService, ConfigStateService } from '@abp/ng.core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {

  isSideMenuActive: boolean = false;


currentUser;
 constructor(
   private authService: AuthService,
   private config: ConfigStateService

 ) {
   this.config.getOne$("currentUser").subscribe(currentUser => {
     this.currentUser = currentUser;
   })
  }
  logout() {
    this.authService.logout().subscribe();
  }
  openSideMenu(e): void {
    e.stopPropagation();
    this.isSideMenuActive = !this.isSideMenuActive;
    document.body.classList.toggle('is-open-menu');
  }
  closeSideMenu() {
    document.body.classList.remove('is-open-menu');
    document.getElementsByClassName('toggle')[0]?.classList?.remove('active');
  }

  // in media equal 768px only == > when click outside menu , will close
  onClickedOutside(e: Event) {
    const mediaQuery = window.matchMedia('(max-width: 992px)');
    if (mediaQuery.matches) {
      this.closeSideMenu();
    }
  }
}
