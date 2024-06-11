import { Component,Input, SimpleChanges } from '@angular/core';
import { Turnier } from '../../shared/turnier';
import { TurnierService } from '../../shared/turnier.service';
import {Router} from "@angular/router";
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-turnier-item-card',
  templateUrl: './turnier-item-card.component.html',
  styleUrl: './turnier-item-card.component.scss'
})
export class TurnierItemCardComponent {
  @Input() turnierItem : Turnier;
  @Input() index: number;
  imageurl: string;

  constructor(private tunierService: TurnierService,
              private router: Router,
              private fireStorage:AngularFireStorage) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['turnierItem']) {
      this.initializeForm();
    }
  }



  initializeForm(){
  if(this.turnierItem.imagePath)
    {
      const ref = this.fireStorage.ref("TurnierUploads/"+this.turnierItem.imagePath);

      ref.getDownloadURL().subscribe(url => {
        this.imageurl = url;
      });
    }
    else
    {
      this.imageurl = "assets/images/placeholder.jpg";
    }
 }

 isDateExpired(date: Date): boolean {
  return date < new Date();
}


}