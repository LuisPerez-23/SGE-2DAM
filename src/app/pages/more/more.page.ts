import {ChangeDetectorRef, Component, OnInit,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAlert,
  IonAvatar,
  IonButton,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader, IonImg, IonLabel,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonChip,  RouterLink, IonGrid, IonRow, IonCol, IonAvatar, IonImg, IonLabel, IonAlert]
})
export class MorePage implements OnInit {
  resultadoTexto: string = '';
  resultadoColor: string = '';
  public radioButtonsTrue: any[] = [];
  public radioButtonsFalse: any[] = [];
  public radioInputs = [
    { label: 'True', type: 'radio', value: 'true' },
    { label: 'False', type: 'radio', value: 'false' }
  ];

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.radioButtonsTrue = [
      {
        text: 'Cancelar',
        role: 'cancel'
      },
      {
        text: 'Ok',
        handler: (data: any) => {
          if (data === 'true') {
            this.resultadoTexto = 'WIN';
            this.resultadoColor = 'green';
          } else {
            this.resultadoTexto = 'LOSE';
            this.resultadoColor = 'red';
          }
          this.cdr.detectChanges();
        }
      }
    ];
    this.radioButtonsFalse = [{
      text: 'Cancelar',
      role: 'cancel'
    },
      {
        text: 'Ok',
        handler: (data: any) => {
          if (data === 'false') {
            this.resultadoTexto = 'WIN';
            this.resultadoColor = 'green';
          } else {
            this.resultadoTexto = 'LOSE';
            this.resultadoColor = 'red';
          }
          this.cdr.detectChanges();
        }
      }
    ];
  }

}
