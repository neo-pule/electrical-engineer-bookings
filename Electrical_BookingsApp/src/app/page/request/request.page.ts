import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { RequestformPage } from '../requestform/requestform.page';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {

  constructor(private router:Router,public popoverController: PopoverController) { }

  ngOnInit() {
  }

//  onSubmit(){
//    this.router.navigateByUrl('/requestform')
//  }

 async presentPopover(ev: any) {
  const popover = await this.popoverController.create({
    component: RequestformPage,
    event: ev,
    translucent: true
  });
  return await popover.present();
}

}
