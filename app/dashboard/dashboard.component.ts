import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
  url:string= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJxSVe4PxUiAeKNagh2mSeJFjrOuDK8iZf6g&s';
  urlw:string='https://mahezon.in/cdn/shop/files/IMG-20241126-WA0674_800x1026_crop_center@2x.jpg?v=1732617734';
  constructor( private router: Router) { }
  shopping:string="";
  checkout:string="";
  cartItems: any = [];
  price = 1000;
  couponValue = 10;
  couponCode = '';
  discount = 0;
  search='';

  showApperal(){
    this.shopping= "apperal"
  
  }
  showElectronics(){
    this.shopping= "electronics"
  }
  showBooks(){
    this.shopping= "books"
  }
  showCart(){
    this.shopping="cart"
  }
  cart(title: string, price: number, img: string) {
    this.cartItems.push({ title, price, img });
    alert(title + " " + "added to cart")
  }
  remove(i: number) {
    this.cartItems.splice(i, 1);
  }
   total(){
     return this.cartItems.reduce((sum,cart) => sum+cart.price, 0);
  }
  get couponEligible() { return this.total ()>= this.price; }
  get remainingForCoupon() { return Math.max(0, this.price - this.total()); }
  get grandTotal() { return Math.max(0, this.total() - this.discount); }

  applyCoupon() {
    const code = this.couponCode.trim().toUpperCase();
    if (code !== 'SAVE10') { 
      alert('Invalid coupon'); this.discount = 0; return; 
    }
    if (!this.couponEligible) {
       alert(`Add $${this.remainingForCoupon} more to unlock this coupon`); 
       return; 
      }
    this.discount = this.couponValue;
    alert(`Coupon applied: $${this.couponValue} off`);
  }
  ShowCheckOut(){
    this.router.navigateByUrl('/checkout');
  }
  submit(){
    if (this.search=='books'){
     this.router.navigateByUrl('/books')
    }
    if (this.search=='dress'){
      this.router.navigateByUrl('/apparel')
     }
     if (this.search=='electronics'){
      this.router.navigateByUrl('/electronics')
     }


  }
  //onImageClick() {
    //this.router.navigate(['/product-details'], {queryParams:{
    //  imageurl: this.url,
    //}
   // })
  //}
  //onImageClickw() {
   // this.router.navigate(['/product-details'], {queryParams:{
      //imageurlw: this.urlw,
   // }//
   // })//
 // }//

  
}