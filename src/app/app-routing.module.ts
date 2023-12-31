import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AdoptionComponent } from './pages/adoption/adoption.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HappydogComponent } from './pages/happydog/happydog.component';
import { LoginsignComponent } from './pages/loginsign/loginsign.component';
import { ServiceComponent } from './pages/service/service.component';
import { ShopComponent } from './pages/shop/shop.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'service',component:ServiceComponent},
  {path:'shop',component:ShopComponent},
  {path:'happydog',component:HappydogComponent},
  {path:'adoption',component:AdoptionComponent},
  {path:'contact',component:ContactComponent},
  {path:'loginsign',component:LoginsignComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
