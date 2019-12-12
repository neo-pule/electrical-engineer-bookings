import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
private data=[{
  category:'pizza',
  expended: true,
  products: [
    {id:0,name:'salami',price:'1'},
    {id:1,name:'salami',price:'2'},
    {id:2,name:'salami',price:'3'},
    {id:3,name:'salami',price:'4'},
    {id:4,name:'salami',price:'5'},
    {id:5,name:'salami',price:'6'}

  ]

},

];

private booking=[];

  constructor() { }

getProducts(){
  return this.data
}

getBooking(){
  return this.booking;
}

addProduct(products){
  this.booking.push(products);
}

}
