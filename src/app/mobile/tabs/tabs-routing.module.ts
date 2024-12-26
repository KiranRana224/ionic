import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1/tab1.page';
import { Tab2Page } from './tab2/tab2.page';
import { Tab3Page } from './tab3/tab3.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tab1', // Default tab when no specific tab is selected
    pathMatch: 'full',
  },
  {
    path: 'tab1',
    component: Tab1Page, // Tab 1 component
  },
  {
    path: 'tab2',
    component: Tab2Page, // Tab 2 component
    // children: [
    //   { path: 'invoice', component: InvoicePage },
    //   { path: 'bill', component: BillPage },
    //   { path: 'cn', component: CreditNotePage },
    //   { path: 'dn', component: DebitNotePage },
    //   { path: '', redirectTo: '/mobile/tabs/tab2', pathMatch: 'full' },
    // ],
  },
  {
    path: 'tab3',
    component: Tab3Page, // Tab 3 component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsRoutingModule {}
