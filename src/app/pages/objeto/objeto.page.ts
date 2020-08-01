import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { PopoverListItem } from 'src/app/interfaces/interface';
import { MenuPopoverComponent } from 'src/app/components/menu-popover/menu-popover.component';

@Component({
  selector: 'app-objeto',
  templateUrl: './objeto.page.html',
  styleUrls: ['./objeto.page.scss'],
})
export class ObjetoPage implements OnInit {

  constructor(
    private popoverController: PopoverController
  ){ 
    this.formObjeto = new FormGroup({
      _nombre: new FormControl({value:'',disabled:false},[Validators.required]),
    });
  }

  ngOnInit() {
  }

  formObjeto:FormGroup;


  listaOpciones: PopoverListItem [] = [
    {
      name: 'Nuevo',
      url: '/tabs/home',
      icon: 'add-circle',
    },
    {
      name: 'Lo encontre',
      url: '/tabs/home',
      icon: 'qr-code',
    },
  ];

  async verMenu(ev: any) {
    console.log(this.listaOpciones);
    
    const popover = await this.popoverController.create({
      component: MenuPopoverComponent,
      componentProps :  { list : this.listaOpciones},
      showBackdrop: true,
      backdropDismiss: true,
      translucent: true,
      cssClass: '',
      // delegate: FrameworkDelegate;
      animated: true,
      mode: 'ios',
      event: ev,
    });
  
    await popover.present();
  }

}
