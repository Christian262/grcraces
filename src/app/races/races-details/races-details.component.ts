import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Race } from '../races.model';
import { RaceService} from '../races.service';

@Component({
  selector: 'app-races-details',
  templateUrl: './races-details.component.html',
  styleUrls: ['./races-details.component.css']
})
export class RacesDetailsComponent implements OnInit {
    race: Race;
    id: number;
    // slug: string;
    // runner: {
    //     firstName: '',
    //     lastName: ''
    // }

  constructor(private raceService: RaceService,
              private route: ActivatedRoute,
             private router: Router) {
  }

  ngOnInit() {
      this.route.params.subscribe(
          (params: Params) => {
              this.id = +params['id'];
            //   this.slug = params['slug'];
              this.race = this.raceService.getRace(this.id);
          }
      );
  }

  onAddToRunners(){
      this.raceService.addRunnerToRaceList(this.race.runners);
  }

  onEditRace(){
      this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});

  }

  onDeleteRace(){
      this.raceService.deleteRace(this.id);
      this.router.navigate(['/races']);
  }

}
