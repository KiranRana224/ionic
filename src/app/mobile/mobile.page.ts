import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.page.html',
  styleUrls: ['./mobile.page.scss'],
  standalone: false,
})
export class MobilePage implements OnInit {
  constructor(private menuController: MenuController) {}

  // Method to close the menu when a menu item is clicked
  closeMenu() {
    this.menuController.close();
  }
  // closeMenu() {
  //   const menu = document.querySelector('ion-menu');
  //   if (menu) {
  //     menu.close();
  //   }
  // }
  openMenu() {}
  ngOnInit() {}
  aboutMenuVisible = false; // Initially, the About menu is hidden

  // Toggle visibility of the About menu when the "About" tab is clicked
  toggleAboutMenu() {
    this.aboutMenuVisible = !this.aboutMenuVisible; // Toggle the menu visibility
  }
}
