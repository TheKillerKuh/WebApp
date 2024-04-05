import { Injectable} from '@angular/core';
import { Turnier } from './turnier';

@Injectable({
  providedIn: 'root'
})

export class TurnierService {
  turniers: Turnier[] = [
    new Turnier(1,'UV Gföhl Beach Turnier','www.facebook.ccom',new Date(2024,8,3),'Beachturnier des UV Gföhl','Lake Jaidhof','Union Volleyball Gföhl'),
    new Turnier(2,'UV Gföhl Beach Turnier 2','www.facebook.ccom',new Date(2024,8,3),'Beachturnier des UV Gföhl','Lake Jaidhof','Union Volleyball Gföhl'),
    new Turnier(2,'UV Gföhl Beach Turnier 2','www.facebook.ccom',new Date(2024,8,3),'Beachturnier des UV Gföhl','Lake Jaidhof','Union Volleyball Gföhl'),
    new Turnier(2,'UV Gföhl Beach Turnier 2','www.facebook.ccom',new Date(2024,8,3),'Beachturnier des UV Gföhl','Lake Jaidhof','Union Volleyball Gföhl'),
    new Turnier(2,'UV Gföhl Beach Turnier 2','www.facebook.ccom',new Date(2024,8,3),'Beachturnier des UV Gföhl','Lake Jaidhof','Union Volleyball Gföhl'),
    new Turnier(2,'UV Gföhl Beach Turnier 2','www.facebook.ccom',new Date(2024,8,3),'Beachturnier des UV Gföhl','Lake Jaidhof','Union Volleyball Gföhl'),
    new Turnier(2,'UV Gföhl Beach Turnier 2','www.facebook.ccom',new Date(2024,8,3),'Beachturnier des UV Gföhl','Lake Jaidhof','Union Volleyball Gföhl'),
    new Turnier(2,'UV Gföhl Beach Turnier 2','www.facebook.ccom',new Date(2024,8,3),'Beachturnier des UV Gföhl','Lake Jaidhof','Union Volleyball Gföhl'),
    new Turnier(2,'UV Gföhl Beach Turnier 2','www.facebook.ccom',new Date(2024,8,3),'Beachturnier des UV Gföhl','Lake Jaidhof','Union Volleyball Gföhl'),
    new Turnier(2,'UV Gföhl Beach Turnier 2','www.facebook.ccom',new Date(2024,8,3),'Beachturnier des UV Gföhl','Lake Jaidhof','Union Volleyball Gföhl'),
    new Turnier(2,'UV Gföhl Beach Turnier 2','www.facebook.ccom',new Date(2024,8,3),'Beachturnier des UV Gföhl','Lake Jaidhof','Union Volleyball Gföhl'),
    new Turnier(2,'UV Gföhl Beach Turnier 2','www.facebook.ccom',new Date(2024,8,3),'Beachturnier des UV Gföhl','Lake Jaidhof','Union Volleyball Gföhl'),
    new Turnier(2,'UV Gföhl Beach Turnier 2','www.facebook.ccom',new Date(2024,8,3),'Beachturnier des UV Gföhl','Lake Jaidhof','Union Volleyball Gföhl'),
    new Turnier(2,'UV Gföhl Beach Turnier 2','www.facebook.ccom',new Date(2024,8,3),'Beachturnier des UV Gföhl','Lake Jaidhof','Union Volleyball Gföhl'),
    new Turnier(2,'UV Gföhl Beach Turnier 2','www.facebook.ccom',new Date(2024,8,3),'Beachturnier des UV Gföhl','Lake Jaidhof','Union Volleyball Gföhl'),
    new Turnier(2,'UV Gföhl Beach Turnier 2','www.facebook.ccom',new Date(2024,8,3),'Beachturnier des UV Gföhl','Lake Jaidhof','Union Volleyball Gföhl'),
    new Turnier(2,'UV Gföhl Beach Turnier 2','www.facebook.ccom',new Date(2024,8,3),'Beachturnier des UV Gföhl','Lake Jaidhof','Union Volleyball Gföhl'),
    new Turnier(2,'UV Gföhl Beach Turnier 2','www.facebook.ccom',new Date(2024,8,3),'Beachturnier des UV Gföhl','Lake Jaidhof','Union Volleyball Gföhl'),
    new Turnier(2,'UV Gföhl Beach Turnier 2','www.facebook.ccom',new Date(2024,8,3),'Beachturnier des UV Gföhl','Lake Jaidhof','Union Volleyball Gföhl'),
    new Turnier(2,'UV Gföhl Beach Turnier 2','www.facebook.ccom',new Date(2024,8,3),'Beachturnier des UV Gföhl','Lake Jaidhof','Union Volleyball Gföhl'),
    new Turnier(2,'UV Gföhl Beach Turnier 2','www.facebook.ccom',new Date(2024,8,3),'Beachturnier des UV Gföhl','Lake Jaidhof','Union Volleyball Gföhl'),
    new Turnier(2,'UV Gföhl Beach Turnier 2','www.facebook.ccom',new Date(2024,8,3),'Beachturnier des UV Gföhl','Lake Jaidhof','Union Volleyball Gföhl'),
    new Turnier(2,'UV Gföhl Beach Turnier 2','www.facebook.ccom',new Date(2024,8,3),'Beachturnier des UV Gföhl','Lake Jaidhof','Union Volleyball Gföhl'),
    new Turnier(2,'UV Gföhl Beach Turnier 2','www.facebook.ccom',new Date(2024,8,3),'Beachturnier des UV Gföhl','Lake Jaidhof','Union Volleyball Gföhl'),
    new Turnier(2,'UV Gföhl Beach Turnier 2','www.facebook.ccom',new Date(2024,8,3),'Beachturnier des UV Gföhl','Lake Jaidhof','Union Volleyball Gföhl'),
    new Turnier(2,'UV Gföhl Beach Turnier 2','www.facebook.ccom',new Date(2024,8,3),'Beachturnier des UV Gföhl','Lake Jaidhof','Union Volleyball Gföhl'),
    new Turnier(2,'UV Gföhl Beach Turnier 2','www.facebook.ccom',new Date(2024,8,3),'Beachturnier des UV Gföhl','Lake Jaidhof','Union Volleyball Gföhl'),
    new Turnier(2,'UV Gföhl Beach Turnier 2','www.facebook.ccom',new Date(2024,8,3),'Beachturnier des UV Gföhl','Lake Jaidhof','Union Volleyball Gföhl'),
    new Turnier(2,'UV Gföhl Beach Turnier 2','www.facebook.ccom',new Date(2024,8,3),'Beachturnier des UV Gföhl','Lake Jaidhof','Union Volleyball Gföhl')
  ];

  setRecipes(turniers: Turnier[]) {
    this.turniers = turniers;
  }

  getTournaments(){
    return this.turniers.slice(); //do not return this.recipes so we
  }

  getTournamentId(id:number){
    return this.turniers[id];
  }

  addTournament(turnier: Turnier) {
    this.turniers.push(turnier);
  }

  updateTournament(index: number, newTurnier: Turnier) {
    this.turniers[index] = newTurnier;
  }

  deleteTournament(index: number) {
    this.turniers.splice(index, 1);
  }
}
