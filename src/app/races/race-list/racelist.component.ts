import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Race } from '../races.model';
import { RaceService} from '../races.service';

@Component({
  selector: 'app-race-list',
  templateUrl: './racelist.component.html',
  styleUrls: ['./racelist.component.css']
})
export class RacelistComponent implements OnInit, OnDestroy {
    races: Race[] = [];
    subscription: Subscription;
    // raceSelected = new EventEmitter<void>();


  constructor(private raceService: RaceService,
            private router: Router,
            private route: ActivatedRoute) {

  }

  ngOnInit() {
      this.subscription = this.raceService.racesChanged
      .subscribe(
        (races: Race[]) => {
            this.races = races;
        }
    );
      this.races = this.raceService.getRaces();
  }

  onNewRace(){
      this.router.navigate(['races/new']);
  }

  ngOnDestroy(){
      this.subscription.unsubscribe();
  }

}
