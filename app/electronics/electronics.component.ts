import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent {
url:string='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpa96YKk64Dqi8YQr6wrZnAP0VKtQJgQpsKw&s'
url1:string='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAeo-venJIrrE5Y_kMBEu3Wc3-B8CyfsfcA&s'
  constructor(private route: Router, private cartService : CartServiceService) { }

  phone(){
    this.cartService.add("phone",999,this.url)
    this.route.navigate(['/cart'])
  }
 laptop(){
   this.cartService.add('laptop',1100,this.url1)
   alert("item added to cart")
 }
 onImageClicklap(){
  this.route.navigate(['/product-details'], {queryParams:{
    laptop:this.url1,
  } })
}
onImageClickphn(){
  this.route.navigate(['/product-details'], {queryParams:{
    phone:this.url,
  } })
}
}

