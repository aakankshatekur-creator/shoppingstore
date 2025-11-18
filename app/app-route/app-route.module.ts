import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from "@angular/router";
import { from } from 'rxjs/observable/from';
import { CheckoutComponent } from '../checkout/checkout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { WelcomeMessageComponent } from '../welcome-message/welcome-message.component';
import { ApparelComponent } from '../apparel/apparel.component';
import { BooksComponent } from '../books/books.component';
import { ElectronicsComponent } from '../electronics/electronics.component';
import { CartComponent } from '../cart/cart.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { LoginComponent } from '../login/login.component';
import { WomenDressComponent } from '../women-dress/women-dress.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
const route:Routes=[
  {
    path:"checkout",
    component: CheckoutComponent
  },
  {
    path:"dashboard",
    component: DashboardComponent
  },
  {
    path:"welcome",
    component: WelcomeMessageComponent
  },
  {
    path:'',
    redirectTo:'welcome',
    pathMatch:'full'
  },
  {
   path:'apparel',
   component: ApparelComponent
  },
  {
    path:'books',
    component: BooksComponent
   },
   {
     path: 'electronics',
     component: ElectronicsComponent
   },
   {
    path:'cart',
    component: CartComponent
   },
   {
     path: "navigation",
     component: NavigationComponent
   },
   {
     path: "login",
     component:LoginComponent
   },
   {
     path:"product-details",
     component: ProductDetailsComponent
   }


]

@NgModule({
  imports: [
    RouterModule.forRoot(route)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRouteModule { }