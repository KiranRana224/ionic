import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobilePage } from './mobile/mobile.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mobile', // Default path
    pathMatch: 'full',
  },
  {
    path: 'mobile',
    loadChildren: () =>
      import('./mobile/mobile.module').then((m) => m.MobileModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
