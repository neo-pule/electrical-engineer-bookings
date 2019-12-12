import { Component, OnInit } from '@angular/core';
import { BookingService } from '../service/booking.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalpagePage } from '../page/modalpage/modalpage.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  booking=[];
  items=[];

  sliderConfig = {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1.6

  }

 

  constructor(private bookingservice:BookingService,
    private router:Router,public modalController: ModalController) {}

    ngOnInit(){
      this.booking=this.bookingservice.getBooking();
      this.items=this.bookingservice.getProducts();
    }

    addToCart(products){
      this.bookingservice.addProduct(products);
    }
// openCart(){
//   this.router.navigate(['nextpage'])
// }

async presentModal() {
  const modal = await this.modalController.create({
    component: ModalpagePage
  });
  return await modal.present();
}

nextPage()
{
  this.router.navigateByUrl('/modalpage');
}

}
