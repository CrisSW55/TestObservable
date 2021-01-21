import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
  
})



export class ShopcartService {
 
  subject:Subject<Array<String>> = new Subject<Array<String>>();
  products: Array<String> = new Array<String>();

  constructor() { 
   
}


}
