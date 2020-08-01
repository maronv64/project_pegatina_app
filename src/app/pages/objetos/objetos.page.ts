import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MenuPopoverComponent } from 'src/app/components/menu-popover/menu-popover.component';
import { PopoverListItem } from "../../interfaces/interface";
import { Router } from '@angular/router';
// import { url } from '../../../environments/environment';

@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.page.html',
  styleUrls: ['./objetos.page.scss'],
})
export class ObjetosPage implements OnInit {

  constructor(
    private popoverController: PopoverController
    ,private router: Router
  ) { }

  ngOnInit() {
  }

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

  async verObjeto(itemObjeto){
    this.router.navigateByUrl('/objeto');
  }

}
