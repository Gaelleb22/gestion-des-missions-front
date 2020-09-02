import { missionMock } from './mock.mission';
import { Mission } from './../missions/miss.domains';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Collegue } from '../auth/auth.domains';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-primes',
  templateUrl: './primes.component.html',
  styleUrls: ['./primes.component.scss']
})
export class PrimesComponent implements OnInit {

  listeMissions: Mission[];
  listeAnnee: number[];
  anneeSelect: number = null;
  collegueConnecte: Observable<Collegue>;

  constructor(private authSrv: AuthService) {
    this.listeMissions = missionMock;
  }

  ngOnInit(): void {
    this.collegueConnecte = this.authSrv.collegueConnecteObs;
    this.listeAnnee = this.recupererAnnee();
  }

  recupererAnnee(): number[] {
    const annees: number[] = [];
    for (let i = 0; i < this.listeMissions.length; i++) {
      if (!annees.includes(this.listeMissions[i].dateFin.getFullYear(), 0)) {
        annees.push(this.listeMissions[i].dateFin.getFullYear());
      }
    }
    return annees;
  }

  selectionMissionParAnnee(): Mission[] {
    const missions: Mission[] = [];
    const currentTime: Date = new Date();
    for (let i = 0; i < this.listeMissions.length; i++) {
      if (this.listeMissions[i].dateFin.getFullYear() == this.anneeSelect && this.anneeSelect == currentTime.getFullYear()) {
        if (this.listeMissions[i].dateFin.getMonth() < currentTime.getMonth()) {
          missions.push(this.listeMissions[i]);
        }
        else if (this.listeMissions[i].dateFin.getMonth() == currentTime.getMonth() && this.listeMissions[i].dateFin.getDate() < currentTime.getDate()) {
          missions.push(this.listeMissions[i]);
        }
      }
      else if (this.listeMissions[i].dateFin.getFullYear() == this.anneeSelect && this.anneeSelect < currentTime.getFullYear()) {
        missions.push(this.listeMissions[i]);
      }
    }
    return missions;
  }

}
