import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginDescription:string;

  constructor(private authService:AuthentificationService, private router:Router) { }

  ngOnInit() {
  }

  login(form:NgForm){
    this.authService.login(form.value).subscribe(d => {      
      if (d.body['status'] == 'OK') {
        this.loginDescription = "";
        this.authService.user.next(d.body['user']);
        this.authService.token = d.body['token'];
        sessionStorage.setItem('token', this.authService.token);
        this.router.navigateByUrl("/");

      } else {
        this.loginDescription = d.body['description'];
        
      }
    });
  }

}
