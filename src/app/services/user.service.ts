import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { server } from "../../environments/environment";
import { User } from "../interfaces/interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private _header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                     .set('Access-Control-Allow-Origin', '*');

  _validar_correo( _user: User ){
    const body = new HttpParams()
    .set('correo', _user.correo);

    return new Promise((resolve, reject) => {
      this.http.post(server+'validar_correo',body.toString(), { headers: this._header})
        .subscribe(res => {
            resolve(res);
        }, (err) => {
          reject(err);
      });
    });

  }

  _login( _user: User ){
    const body = new HttpParams()
    .set('correo', _user.correo)
    .set('clave', _user.clave);

    return new Promise((resolve, reject) => {
      this.http.post(server+'login',body.toString(), { headers: this._header})
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
      });
    });

  }

}
