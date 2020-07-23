import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-messagebox',
  templateUrl: './messagebox.component.html',
  styleUrls: ['./messagebox.component.scss'],
})
export class MessageboxComponent implements OnInit {

  constructor(private toastController: ToastController) { }

  ngOnInit() {}

  public async presentToastWithButtons() {
    const toast = await this.toastController.create({
      animated: true,
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ],
      color: 'primary',
      cssClass: 'toast-success',
      duration: 2000,
      header: 'Toast header',
      keyboardClose: true,
      message: 'Click to Close',
      mode: 'ios',
      position: 'bottom',
      translucent: true
    });
    toast.present();
  }

}
