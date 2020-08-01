import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjetoPageRoutingModule } from './objeto-routing.module';

import { ObjetoPage } from './objeto.page';
import { MenuPopoverComponent } from 'src/app/components/menu-popover/menu-popover.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjetoPageRoutingModule
    ,ReactiveFormsModule
    ,ComponentsModule
  ],
  declarations: [ObjetoPage],
  entryComponents: [MenuPopoverComponent]  
})
export class ObjetoPageModule {}
