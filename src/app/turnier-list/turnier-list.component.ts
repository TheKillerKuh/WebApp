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
  showCards: boolean = true;
  currentTurnier: Turnier;

  constructor(
    private dataStorageService: DataStorageService,
    private turnierService: TurnierService) {
  }

  ngOnInit() {
    this.dataStorageService.fetchRecipes().subscribe((tournaments) => {
      const today = new Date();
      this.turniers = tournaments.filter(tournament => new Date(tournament.date) >= today);
    
      //this.turniers = tournaments;
      });
    }

  setCurrentTurnier(turnier: Turnier){
        
        this.currentTurnier = turnier;
        console.log('Current tournament:', this.currentTurnier);
        this.turniers[1].date.toLocaleDateString();
  }    

  isDateExpired(date: Date): boolean {
    return date < new Date();
  }

  }