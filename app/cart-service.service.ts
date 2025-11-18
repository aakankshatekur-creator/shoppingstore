import { Injectable } from '@angular/core';

@Injectable()
export class CartServiceService {
cartItems:{title: string, price: number, img:string}[]=[];
add(title: string, price: number, img:string){
  this.cartItems.push({title,price,img})
}
remove(index: number){
  this.cartItems.splice(index,1);
}
total(){
  return this.cartItems.reduce((sum, item)=> sum+ item.price,0);
}
  constructor() { }

}