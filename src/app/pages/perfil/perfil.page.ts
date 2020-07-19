import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor() {
    this.formPerfil = new FormGroup({
      nombre : new FormControl({value:'maron vera',disabled:true},[Validators.required]),
      email : new FormControl({value:'maron.v64@gmail.com',disabled:true},[Validators.required]),
      password : new FormControl({value:'123456789',disabled:true},[Validators.required]),
      image : new FormControl({value:'../../../assets/icon/favicon.png',disabled:true},[Validators.required])
    });
  }
  image : string = '';
  ngOnInit() {
    this.formPerfil.get('image').setValue('../../../assets/icon/favicon.png');
    this.image = this.formPerfil.get('image').value;
  }

  formPerfil:FormGroup;

}
