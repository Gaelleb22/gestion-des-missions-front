import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { TechComponent } from './tech/tech.component';
import { RouterModule, Routes } from '@angular/router';
import { StatutConnecteService } from './auth/statut-connecte.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { GestionMissionsComponent } from './gestion-missions/gestion-missions.component';
import { PlanningMissionsComponent } from './planning-missions/planning-missions.component';
import { PrimesComponent } from './primes/primes.component';
import { NoteDeFraisComponent } from './note-de-frais/note-de-frais.component';
import { ValidationMissionsComponent } from './validation-missions/validation-missions.component';
import { NatureMissionsComponent } from './nature-missions/nature-missions.component';
import { MissionsComponent } from './missions/missions.component';
import { MissionDemandeComponent } from './missions/mission-demande/mission-demande.component';
import { MissionModifComponent } from './missions/mission-modif/mission-modif.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    TechComponent,
    AccueilComponent,
    MenuComponent,
    GestionMissionsComponent,
    PlanningMissionsComponent,
    PrimesComponent,
    NoteDeFraisComponent,
    ValidationMissionsComponent,
    NatureMissionsComponent,
    MissionsComponent,
    MissionDemandeComponent,
    MissionModifComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
