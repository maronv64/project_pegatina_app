import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MessageboxComponent } from "./messagebox/messagebox.component";

@NgModule({
  declarations: [MessageboxComponent],
  imports: [
    CommonModule,IonicModule
  ],
  exports:[],
  providers:[MessageboxComponent]
})
export class ComponentsModule { }
