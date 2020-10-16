import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-index-login',
  templateUrl: './index-login.component.html',
  styleUrls: ['./index-login.component.css']
})
export class IndexLoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  loginInstance = new LoginService();

  logar = () => {
    if(this.loginInstance.logar('teste','123456')){
      localStorage.setItem('token', 'logado');
      this.router.navigate(['']);
      return;
    } else {
      alert('Something bad happened bruh');
    }
  }
}
