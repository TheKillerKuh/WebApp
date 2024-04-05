import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurnierListComponent } from './turnier-list/turnier-list.component';
import { KalenderComponent } from './kalender/kalender.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent  ,pathMatch: "full"},
  {path: 'turniers', component: TurnierListComponent},
  {path: 'kalender', component: KalenderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
