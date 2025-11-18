import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  url1:string="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781668055960/it-ends-with-us-9781668055960_hr.jpg";
 url2:string='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFnQP0FJ1RbQ5kp-8HXHORPjy1yXoBs9qAKQ&s';
  constructor( private route: Router, private cartService: CartServiceService) { }
  book1(){
    this.cartService.add("book1",100,this.url1)
    this.route.navigate(['/cart'])
  }
  book2(){
    this.cartService.add("book2",100,this.url2)
    this.route.navigate(['/cart'])
  }
  onImageClick1(){
    this.route.navigate(['/product-details'], {queryParams:{
      book1:this.url1,
    } })
  }
  onImageClick2(){
    this.route.navigate(['/product-details'], {queryParams:{
      book2:this.url2,
    } })
  }

}