import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
error: string=" ";

  constructor(private route:Router) { }
  username="";
  password="";
  login(){
    new Promise<any>((resolve,reject)=>{
      if(this.username=='aakanksha' && this.password=='akshaya'){
        resolve("yes your credentials are correct");
      }else{
        reject("Incorrect Username or Password")
      }
    })
    .then(()=>{
      this.route.navigateByUrl('/navigation')
    }).catch(err => this.error= String(err));
  }
}