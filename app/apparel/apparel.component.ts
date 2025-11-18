import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { Router } from '@angular/router';
import { query } from '@angular/core/src/animation/dsl';

@Component({
  selector: 'app-apparel',
  templateUrl: './apparel.component.html',
  styleUrls: ['./apparel.component.css']
})
export class ApparelComponent  {

  constructor( private cartService: CartServiceService, private router: Router) { }

  url:string= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJxSVe4PxUiAeKNagh2mSeJFjrOuDK8iZf6g&s';
  urlw:string='https://mahezon.in/cdn/shop/files/IMG-20241126-WA0674_800x1026_crop_center@2x.jpg?v=1732617734';
  addWomenCart(){
    this.cartService.add('dresses', 20,this.urlw);
    alert("item added to cart")
  }
  addMenCart(){
    this.cartService.add('dresses', 20,this.url);
    alert("item added to cart")
  }
  onImageClickw(){
    this.router.navigate(['/product-details'], {queryParams:{
      womendress:this.urlw,
    } })
  }
  onImageClick(){
    this.router.navigate(['/product-details'], {queryParams:{
      mendress:this.url,
    } })
  }

}