import { Component, Input } from '@angular/core';
import { Turnier } from '../../shared/turnier';
import { TurnierService } from '../../shared/turnier.service';
import {Router} from "@angular/router";

@Component({
  selector: 'tr [app-turnier-item-tablerow]',
  templateUrl: './turnier-item-tablerow.component.html',
  styleUrl: './turnier-item-tablerow.component.scss'
})
export class TurnierItemTablerowComponent {
  @Input() turnierItem : Turnier;
  @Input() index: number;
  constructor(private tunierService: TurnierService,
              private router: Router) {
  }

  setCurrentTurnier (){
    this.tunierService.currentTurnier = this.turnierItem;
  }
}
