import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { TurnierService } from './turnier.service';
import { Turnier } from './turnier';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private turnierService: TurnierService) {}

  storeRecipes() {
    const recipes = this.turnierService.getTournaments();
    this.http
      .put(
        'https://volleyballturniereoe-9f892-default-rtdb.europe-west1.firebasedatabase.app/tournaments.json',
        recipes
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.http
      .get<Turnier[]>(
        'https://volleyballturniereoe-9f892-default-rtdb.europe-west1.firebasedatabase.app/tournaments.json'
      )
      .pipe(
        map(tournaments  => {
          return tournaments.map(tournament => {
            return {
              ...tournament,
              date: this.parseDate(tournament.date.toString())
            };
          });
        }),
        tap(tournaments => {
          return tournaments;
        })
      )
  }

  private parseDate(dateString: String): Date {
    const [day, month, year] = dateString.split('.').map(part => parseInt(part, 10));
    return new Date(year, month - 1, day); // month is 0-indexed in JavaScript Date
  }
}
