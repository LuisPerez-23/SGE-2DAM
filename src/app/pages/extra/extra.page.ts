import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  IonActionSheet, IonAvatar, IonButton, IonChip, IonCol,
  IonContent, IonGrid, IonHeader, IonIcon, IonImg,
  IonLabel, IonRow, IonTitle, IonToolbar
} from '@ionic/angular';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.page.html',
  styleUrls: ['./extra.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonChip, IonAvatar, IonImg, IonLabel,
    IonGrid, IonRow, IonCol, IonButton, IonActionSheet, RouterLink
  ]
})
export class ExtraPage implements OnInit {
  img1="/assets/imagenes/anime01 (1).jpg";
  img2="/assets/imagenes/anime02 (1).jpg";
  img3="/assets/imagenes/anime03 (1).jpg";

  actionSheetButtons = [{
    text: 'Cancel',
    role: 'cancel',
    icon: 'trash',
    handler: () => {
      console.log('Cancel clicked');
    }
  }, {
    text: 'Default',
    handler: () => {
      this.img1 = "/assets/imagenes/anime01 (1).jpg";
      this.img2 = "/assets/imagenes/anime02 (1).jpg";
      this.img3 = "/assets/imagenes/anime03 (1).jpg";
      this.cdr.detectChanges();
    }
  }, {
    text: 'Mary',
    handler: () => {
      this.img1 = "/assets/imagenes/anime01 (1).jpg";
      this.img2 = "/assets/imagenes/anime01 (1).jpg";
      this.img3 = "/assets/imagenes/anime01 (1).jpg";
      this.cdr.detectChanges();
    }
  }, {
    text: 'Lisa',
    handler: () => {
      this.img1 = "/assets/imagenes/anime02 (1).jpg";
      this.img2 = "/assets/imagenes/anime02 (1).jpg";
      this.img3 = "/assets/imagenes/anime02 (1).jpg";
      this.cdr.detectChanges();
    }
  }, {
    text: 'John',
    handler: () => {
      this.img1 = "/assets/imagenes/anime03 (1).jpg";
      this.img2 = "/assets/imagenes/anime03 (1).jpg";
      this.img3 = "/assets/imagenes/anime03 (1).jpg";
      this.cdr.detectChanges();
    }
  }];

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() { }


}
