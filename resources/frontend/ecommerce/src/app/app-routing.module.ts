import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { HomeComponent } from './views/home/home.component';
import { CityComponent } from './views/city/city.component';
import { ClientComponent } from './views/client/client.component';
import { OrderComponent } from './views/order/order.component';
import { ProductComponent } from './views/product/product.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'city', component: CityComponent },
  { path: 'client', component: ClientComponent },
  { path: 'order', component: OrderComponent },
  { path: 'product/:id', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[
  LoginComponent,
  RegisterComponent,
  HomeComponent
]
