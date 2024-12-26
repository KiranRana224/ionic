import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobilePage } from './mobile.page';

const routes: Routes = [
  {
    path: '',
    component: MobilePage, // MobilePage is the common layout page
    children: [
      {
        path: 'tabs', // This is the main entry for tabs
        loadChildren: () =>
          import('./tabs/tabs.module').then((m) => m.TabsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobileRoutingModule {}
