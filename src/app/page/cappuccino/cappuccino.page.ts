import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cappuccino',
  templateUrl: './cappuccino.page.html',
  styleUrls: ['./cappuccino.page.scss'],
})
export class CappuccinoPage implements OnInit {

  price=0;
price2=0;
price3=0;
price4=0;
total=this.price + this.price2 + this.price3 + this.price4;
subtotal=0;

  constructor() { 

  }
onPriceMinus(){
  this.price-=6;
  if(this.price<0)
    {
      this.price=0
    }
    
 this.total=this.price + this.price2 + this.price3 + this.price4;
}
onPriceAdd(){
  this.price+=6;
  this.total=this.price + this.price2 + this.price3 + this.price4;

}
onPriceMinus2(){
  this.price2-=8;
  if(this.price2<0)
    {
      this.price2=0
    }
    this.total=this.price + this.price2 + this.price3 + this.price4;

}
onPriceAdd2(){
  this.price2+=8;
  this.total=this.price + this.price2 + this.price3 + this.price4;

}
onPriceMinus3(){
  this.price3-=14;
  if(this.price3<0)
    {
      this.price3=0
    }
    this.total=this.price + this.price2 + this.price3 + this.price4;

}
onPriceAdd3(){
  this.price3+=14;
  this.total=this.price + this.price2 + this.price3 + this.price4;

}
onPriceMinus4(){
  this.price4-=10;
  if(this.price4<0)
    {
      this.price4=0
    }
    this.total=this.price + this.price2 + this.price3 + this.price4;

}
onPriceAdd4(){
  this.price4+=10;
  this.total=this.price + this.price2 + this.price3 + this.price4;

}
onPrint()
{
  window.print();
}

  ngOnInit() {
  }

}
