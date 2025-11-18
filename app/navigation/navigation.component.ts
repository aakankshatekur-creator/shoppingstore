import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent  {

  constructor( private router : Router) { 
    

    }
    apparel(){
      this.router.navigateByUrl("/apparel");
    }
    books(){
      this.router.navigateByUrl("/books");
    }
    cart(){
      this.router.navigateByUrl("/cart");
    }
    electronics(){
      this.router.navigateByUrl("/electronics");
    }

  }

 

