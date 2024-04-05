import { Component } from '@angular/core';
import { Turnier } from '../shared/turnier';
import { TurnierService } from '../shared/turnier.service';
import {DataStorageService} from "../shared/data-storage.service";

@Component({
  selector: 'app-turnier-list',
  templateUrl: './turnier-list.component.html',
  styleUrl: './turnier-list.component.scss'
})

export class TurnierListComponent {
  turniers: Turnier[];
  showCards: boolean = false;

  constructor(
    private dataStorageService: DataStorageService,
    private turnierService: TurnierService) {
  }

  ngOnInit() {
    this.dataStorageService.fetchRecipes().subscribe((tournaments) => {
      this.turniers = tournaments;
      });
  }

  }