import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  logar = (username: string, password: string) => {
    return (username == 'test' && password == '123456') ? true : false;
  }
}
