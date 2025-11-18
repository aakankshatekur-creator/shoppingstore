import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private cartService: CartServiceService, private router: Router) {}

  
  womendress: string = '';
 mendress: string = '';
  book1: string = '';
  book2:string='';
  mac:string='';
  iphone:string='';


  ngOnInit() {
      this.route.queryParamMap.subscribe(params => {
        this.womendress = params.get('womendress')??"",
        this.mendress = params.get('mendress')??"" ,
        this.book1 = params.get('book1')??"",
        this.book2 = params.get('book2')??"",
        this.mac = params.get('laptop')??'',
        this.iphone = params.get('phone')??''
        
    });
  }
cart(){
  this.cartService.add('dress', 40, this.mendress)
}
goCart(){
  this.router.navigateByUrl('/cart')
}
wcart(){
  this.cartService.add('dress', 40, this.womendress)
}
cart1(){
  this.cartService.add('dress', 40, this.book1)
}
cart2(){
  this.cartService.add('dress', 40, this.book2)
}
Cartphn(){
  this.cartService.add('phone', 999, this.iphone)
}
cartlap(){
  this.cartService.add('laptop', 999, this.mac)
}
}