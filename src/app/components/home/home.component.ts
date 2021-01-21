import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShopcartService } from 'src/app/services/shopcart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  computer: String = "CyberPowerPc";
  coffee: String = "StarBucks";
  shoes: String = "Adidas";
  private cartSubscription: Subscription;
  products: Array<String> = new Array<String>();
  count:number = 0;

  constructor(private shopcartService:ShopcartService) { 
    this.cartSubscription = this.shopcartService.subject.subscribe( {
      next: (v) =>   console.log(`${v[this.count]} was added to your cart!`)    }  );


  }

  ngOnInit(): void {
  }

  ngOnDestroy() {this.cartSubscription.unsubscribe();
    
  }

  addPc(){
    
    if(this.count < 10){
      this.products.push(this.computer);
      this.shopcartService.subject.next(this.products);
      this.count++;

    }
   
    
    
 

  }


  addCoffee(){ if(this.count < 10){
    this.products.push(this.coffee);
    this.shopcartService.subject.next(this.products);
    this.count++;

  }}


  addShoes(){ if(this.count < 10){
    this.products.push(this.shoes);
    this.shopcartService.subject.next(this.products);
    this.count++;

  }}


}
