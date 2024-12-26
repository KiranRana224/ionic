import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit {
  isAboutMenuVisible = false; // Track the visibility of the About menu

  constructor(private router: Router) {}

  // Toggle visibility of the About menu
  toggleAboutMenu() {
    this.isAboutMenuVisible = !this.isAboutMenuVisible;
  }

  // Navigate to the selected option
  navigateTo(option: string) {
    this.router.navigate([`/mobile/tabs/tab2/${option}`]); // Navigate to the respective page
    this.isAboutMenuVisible = false; // Hide the menu after selection
  }

  ngOnInit() {}
}
