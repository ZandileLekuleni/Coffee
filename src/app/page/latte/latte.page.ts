import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latte',
  templateUrl: './latte.page.html',
  styleUrls: ['./latte.page.scss'],
})
export class LattePage implements OnInit {

  price=0;
  price2=0;
  price3=0;
  price4=0;
  total=this.price + this.price2 + this.price3 + this.price4;
  subtotal=0;
  
    constructor() { 
  
    }
  onPriceMinus(){
    this.price-=8;
    if(this.price<0)
      {
        this.price=0
      }
      
   this.total=this.price + this.price2 + this.price3 + this.price4;
  }
  onPriceAdd(){
    this.price+=8;
    this.total=this.price + this.price2 + this.price3 + this.price4;
  
  }
  onPriceMinus2(){
    this.price2-=10;
    if(this.price2<0)
      {
        this.price2=0
      }
      this.total=this.price + this.price2 + this.price3 + this.price4;
  
  }
  onPriceAdd2(){
    this.price2+=10;
    this.total=this.price + this.price2 + this.price3 + this.price4;
  
  }
  onPriceMinus3(){
    this.price3-=16;
    if(this.price3<0)
      {
        this.price3=0
      }
      this.total=this.price + this.price2 + this.price3 + this.price4;
  
  }
  onPriceAdd3(){
    this.price3+=16;
    this.total=this.price + this.price2 + this.price3 + this.price4;
  
  }
  onPriceMinus4(){
    this.price4-=18;
    if(this.price4<0)
      {
        this.price4=0
      }
      this.total=this.price + this.price2 + this.price3 + this.price4;
  
  }
  onPriceAdd4(){
    this.price4+=18;
    this.total=this.price + this.price2 + this.price3 + this.price4;
  
  }
  onPrint()
  {
    window.print();
  }
  
    ngOnInit() {
    }
  
  }
