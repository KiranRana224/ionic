import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  dummyData = [
    {
      id: 1,
      title: 'Item 1',
      description: 'This is the description for item 1.',
    },
    {
      id: 2,
      title: 'Item 2',
      description: 'This is the description for item 2.',
    },
    {
      id: 3,
      title: 'Item 3',
      description: 'This is the description for item 3.',
    },
  ];

  // Method to change content
  changeContent() {
    this.dummyData = [
      {
        id: 1,
        title: 'New Item 1',
        description: 'This is the updated description for item 1.',
      },
      {
        id: 2,
        title: 'New Item 2',
        description: 'This is the updated description for item 2.',
      },
      {
        id: 3,
        title: 'New Item 3',
        description: 'This is the updated description for item 3.',
      },
      {
        id: 4,
        title: 'Item 4',
        description: 'This is a new item added dynamically.',
      },
    ];
  }
  constructor() {}
}
