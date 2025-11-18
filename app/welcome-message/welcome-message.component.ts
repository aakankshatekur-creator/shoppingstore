import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html',
  styleUrls: ['./welcome-message.component.css']
})
export class WelcomeMessageComponent implements OnInit {

  constructor(private router :Router) { }
 message:string="";
 
  ngOnInit() {
    this.message="welcome , Happy shopping :) "
    setTimeout(()=> {
      this.message=" ",
      this.router.navigateByUrl('/login');
  },2000)
  
}
}