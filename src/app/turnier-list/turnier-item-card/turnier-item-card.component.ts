import { Component,Input } from '@angular/core';
import { Turnier } from '../../shared/turnier';
import { TurnierService } from '../../shared/turnier.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-turnier-item-card',
  templateUrl: './turnier-item-card.component.html',
  styleUrl: './turnier-item-card.component.scss'
})
export class TurnierItemCardComponent {
  @Input() turnierItem : Turnier;
  @Input() index: number;
  constructor(private tunierService: TurnierService,
              private router: Router) {
  }
}