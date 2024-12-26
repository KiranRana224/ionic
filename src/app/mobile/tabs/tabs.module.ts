import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { Tab1Page } from './tab1/tab1.page';
import { Tab2Page } from './tab2/tab2.page';
import { Tab3Page } from './tab3/tab3.page';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'tab1', component: Tab1Page },
      { path: 'tab2', component: Tab2Page },
      { path: 'tab3', component: Tab3Page },
    ]),
  ],
  declarations: [Tab1Page, Tab2Page, Tab3Page],
})
export class TabsModule {}
