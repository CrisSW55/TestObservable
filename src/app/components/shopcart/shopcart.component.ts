import { Component, OnInit ,OnDestroy} from '@angular/core';
import { ShopcartService } from '../../services/shopcart.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-shopcart',
  templateUrl: './shopcart.component.html',
  styleUrls: ['./shopcart.component.css']
})
export class ShopcartComponent implements OnInit {
  computer: String = "";
  coffee: String = "";
  shoes: String = "";
  private cartSubscription: Subscription;
  products: Array<String> = new Array<String>();
  count:number = 0;
  
  constructor(private shopcartService:ShopcartService) { this.cartSubscription = this.shopcartService.subject.subscribe( {
    next: (v) =>   console.log(`Nice! You just bought: ${v}`)    } );
    }

  ngOnInit(): void { 


  }

  ngOnDestroy() {this.cartSubscription.unsubscribe();
    
  }

  

  addPc(){
    this.computer = "CyberPowerPc";
    this.shopcartService.subject.next(this.products);
    
 

  }


  addCoffee(){ this.coffee  = "Got coffee";}


  addShoes(){ this.shoes = "Got shoes";}

}
