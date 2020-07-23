import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

import { User } from "../../interfaces/interface";
import { ToastController } from '@ionic/angular';
import { ComponentsModule } from "../../components/components.module";
import { MessageboxComponent } from 'src/app/components/messagebox/messagebox.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
     private router: Router
     ,private toastController: ToastController
    ,private _userService:UserService
    ,private _messagebox: MessageboxComponent
  ) {
    this.formLogin = new FormGroup({
      _nome_token : new FormControl({value : '',disabled:false}),
      _name : new FormControl({value : '',disabled:false}),
      _email : new FormControl({value: '',disabled:false}, [Validators.required,Validators.email]),
      _password : new FormControl({value: '',disabled:false}, [Validators.required])
    });
  }

  formLogin: FormGroup;
  _usuario: User={nome_token:'',correo:'',clave:''};

  ngOnInit() {
  }

  onSubmit(){
    this._messagebox.presentToastWithButtons();
    console.log('login');
    // console.log(
    //   'nome_token:', this.formLogin.get('_nome_token').value,
    //   'correo:'    , this.formLogin.get('_email').value
    // );

    this._userService._validar_correo({

      nome_token  : this.formLogin.get('_nome_token').value,
      correo      : this.formLogin.get('_email').value

    }).then(data=>{
      console.log('service');
      console.log('-> data:',data['code']);

      console.log( '_correo:', this.formLogin.get('_email').value);
      
      if (data['code']=="500") { // el correo es incorrecto
        console.log('code 500',data);
        //this.formLogin.get('_email').setErrors({'incorrect':true}); //setear el valor con incorrecto
      }

      if (data['code']=="200") {
        //this.presentToastWithButtons();
        console.log('_email:', this.formLogin.get('_email').value);
        this._userService._login({
          correo: this.formLogin.get('_email').value,
          clave:  this.formLogin.get('_password').value
        }).then(data1=>{
          if (data1['code']=='500') {
            console.log('log de la clave:',data1);
            
            // this.formLogin.get('_password').setErrors({'incorrect':true}); //setear el valor con incorrecto
          } else if(data1['code']=='200') {
            this.router.navigateByUrl('/tabs/home');
          }
        }).catch(error1=>{
          console.log(error1);
        }).finally(()=>{
          console.log('finaly');
        });
    
      }

    }).catch(error=>{}).finally(()=>{});

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithButtons() {
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
