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
      _email : new FormControl({value: 'admin@admin.com',disabled:false}, [Validators.required,Validators.email]),
      _password : new FormControl({value: '',disabled:false}, [Validators.required])
    });
  }

  formLogin: FormGroup;
  _usuario: User={nome_token:'',correo:'',clave:''};

  ngOnInit() {
  }

  onSubmit(){
    
    console.log('login');
    this._userService._validar_correo({

      nome_token  : this.formLogin.get('_nome_token').value,
      correo      : this.formLogin.get('_email').value

    }).then(data_validar_correo=>{
      console.log('service');
      console.log('-> data:',data_validar_correo['code']);

      console.log( '_correo:', this.formLogin.get('_email').value);
      
      if (data_validar_correo['code']=="500") { // el correo es incorrecto
        
        console.log('code 500',data_validar_correo);
        let _message = data_validar_correo['message'] + ' . ' + data_validar_correo['message_exception'];
        this._messagebox.presentToastWithButtons({message:_message});

      }

      if (data_validar_correo['code']=="200") {
        //this.presentToastWithButtons();
        console.log('_email:', this.formLogin.get('_email').value);
        
        this._userService._login({

          correo: this.formLogin.get('_email').value,
          clave:  this.formLogin.get('_password').value

        }).then(data_login=>{
          if (data_login['code']=='500') {
            
            console.log('log de la clave:',data_login);
            let _message = data_login['message'] + ' . ' + data_login['message_exception'];
            this._messagebox.presentToastWithButtons({message:_message});

          } else if(data_login['code']=='200') {
            this.router.navigateByUrl('/tabs/home');
          }
        }).catch(error_login=>{
          console.log(error_login);
          this._messagebox.presentToastWithButtons();
        }).finally(()=>{
          console.log('finaly');
        });
    
      }

    }).catch(error_validar_correo=>{
      this._messagebox.presentToastWithButtons();
    }).finally(()=>{});

  }

}
