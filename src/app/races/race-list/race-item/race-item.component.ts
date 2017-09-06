import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Race }  from '../../races.model';
import { RaceService } from '../../races.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RacesDetailsComponent } from '../../races-details/races-details.component';

@Component({
  selector: 'app-race-item',
  templateUrl: './race-item.component.html',
  styleUrls: ['./race-item.component.css']
})
export class RaceItemComponent implements OnInit {
    @Input() race: Race;
    @Input() index: number;

    // Race: {index: id};



    constructor(private router: Router,
                private route: ActivatedRoute,
                private raceService: RaceService){}


  ngOnInit() {
    //   this.Race = this.raceService.getRace();
  }

   // onLoadRace(index: number){
   //     this.router.navigate(['/race/:id']);
   // }

}
