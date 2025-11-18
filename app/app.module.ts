import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRouteModule } from './app-route/app-route.module';
import { ApparelComponent } from './apparel/apparel.component';
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartServiceService } from './cart-service.service';


@NgModule({
  imports:[ BrowserModule, FormsModule, ReactiveFormsModule, AppRouteModule],
  declarations: [ AppComponent, CheckoutComponent , WelcomeMessageComponent,DashboardComponent, ApparelComponent, BooksComponent, CartComponent, ElectronicsComponent,NavigationComponent,LoginComponent,ProductDetailsComponent],
  bootstrap:    [ AppComponent ],
  providers: [CartServiceService]
})
export class AppModule { }
