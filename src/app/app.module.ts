import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TurnierListComponent } from './turnier-list/turnier-list.component';
import { TurnierItemCardComponent } from './turnier-list/turnier-item-card/turnier-item-card.component';
import { HeaderComponent } from './header/header.component';
import { KalenderComponent } from './kalender/kalender.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TurnierItemTablerowComponent } from './turnier-list/turnier-item-tablerow/turnier-item-tablerow.component';
import { TurnierItemDetailComponent } from './turnier-list/turnier-item-detail/turnier-item-detail.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import { environment } from '../enviroments/enviroment';

@NgModule({
  declarations: [
    AppComponent,
    TurnierListComponent,
    TurnierItemCardComponent,
    HeaderComponent,
    KalenderComponent,
    HomeComponent,
    TurnierItemTablerowComponent,
    TurnierItemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
