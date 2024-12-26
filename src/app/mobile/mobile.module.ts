import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MobilePage } from './mobile.page';
import { MobileRoutingModule } from './mobile-routing.module';

@NgModule({
  declarations: [MobilePage],
  imports: [CommonModule, IonicModule, MobileRoutingModule],
})
export class MobileModule {}
