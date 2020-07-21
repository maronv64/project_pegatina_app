import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) {
    this.formLogin = new FormGroup({
      _nome_token : new FormControl({value : '',disabled:false}),
      _name : new FormControl({value : '',disabled:false}),
      _email : new FormControl({value: '',disabled:false}, [Validators.required,Validators.email]),
      _password : new FormControl({value: '',disabled:false}, [Validators.required])
    });
  }

  formLogin: FormGroup;

  ngOnInit() {
  }

  onSubmit(){
    this.router.navigateByUrl('/tabs/home');
  }

}
