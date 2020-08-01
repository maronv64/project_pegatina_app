import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjetosPageRoutingModule } from './objetos-routing.module';

import { ObjetosPage } from './objetos.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { MenuPopoverComponent } from 'src/app/components/menu-popover/menu-popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjetosPageRoutingModule
    ,ComponentsModule
  ],
  declarations: [ObjetosPage],
  entryComponents: [MenuPopoverComponent]  
})
export class ObjetosPageModule {}
