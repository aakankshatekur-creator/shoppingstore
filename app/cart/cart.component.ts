import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private router: Router, private cartService: CartServiceService) { }
  price = 1000;
  couponValue = 10;
  couponCode = '';
  discount = 0;

  get cartItems(){
    return this.cartService.cartItems;
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
  

}