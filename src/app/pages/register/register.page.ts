import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router) { 
    this.formRegister = new FormGroup({
      _nome_token: new FormControl({value: '',disabled: false}),
      _name: new FormControl({value: '',disabled: false},[Validators.required]),
      _email: new FormControl({value: '',disabled: false},[Validators.required,Validators.email]),
      _password : new FormControl({value: '',disabled:false}, [Validators.required]),
    });
  }

  formRegister: FormGroup;
  
  ngOnInit() {
  }

  isPassword: boolean = true;
  showPassword() {
      this.isPassword = !(this.isPassword);
  }

  onSubmit(){
    this.router.navigateByUrl('/tabs/home');
  }


}
