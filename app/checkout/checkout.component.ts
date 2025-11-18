import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  
  constructor( private router: Router, private route : ActivatedRoute) { }
  
  step: 'address' | 'payment' = 'address';
  addressForm:FormGroup= new FormGroup({
    fName: new FormControl('', [Validators.required, Validators.minLength(2)] ),
    lName:new FormControl('', [Validators.required]),
    streetName: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required, Validators.minLength(2)]),
    zipcode: new FormControl('', [Validators.required])


  })
  paymentForm:FormGroup= new FormGroup({
    cardNumber: new FormControl('', [Validators.required]),
    cvv: new FormControl('', [Validators.required]),
    expDate: new FormControl('', [Validators.required])
  })
  get a() { return this.addressForm.controls; }
  get p() { return this.paymentForm.controls; }

  previous(){
    this.router.navigateByUrl("/dashboard");
  }

  submitAddress() : void {
    if (this.addressForm.invalid) {
      this.addressForm.markAsTouched();
      return;
    }
    this.step = 'payment';
  }
  
    placeOrder(){
      if(this.addressForm.invalid || this.paymentForm.invalid){
        this.addressForm.markAsTouched();
        this.paymentForm.markAsTouched();

        return;
      }
    alert('Order placed!');
  }
  

}