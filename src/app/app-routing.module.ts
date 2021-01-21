import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { ShopcartComponent } from './components/shopcart/shopcart.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shopcart', component: ShopcartComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
