import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  // image:string = '../assets/favicon.png';
  image:string = '../../../assets/icon/favicon.png';
  
  constructor(private router:Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigateByUrl('/login');
    }, 2000);
  }

}
