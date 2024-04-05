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
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe
            };
          });
        }),
        tap(recipes => {
          return recipes;
        })
      )
  }
}
