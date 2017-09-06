import { Injectable} from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Race } from './races.model';
import { Runner } from '../shared/runners.model';
import { RunnerService } from '../runners/runners.service';

@Injectable()
export class RaceService{
    racesChanged = new Subject<Race[]>();

    private races: Race[] = [
        new Race('Columbus Marathon', 'Second marathon of the year!', 'http://static.wixstatic.com/media/aa0c98_acfd0d4be1114585b069f6bd302238e9.png_srz_203_111_85_22_0.50_1.20_0.00_png_srz', 'October 15, 2017',
    [
        new Runner('Christian', 'Lautenschleger'),
    ])
    ];

    constructor(private runnerService: RunnerService){}

setRaces(races: Race[]){
    this.races = races;
    this.racesChanged.next(this.races.slice());
}

getRaces(){
    return this.races.slice();
}

getRace(index: number){
    return this.races[index];
}

addRunnerToRaceList(runners: Runner[]){
    this.runnerService.addRunners(runners);
}

addRace(race: Race){
    this.races.push(race);
    this.racesChanged.next(this.races.slice());
}

updateRace(index: number, newRace: Race){
    this.races[index] = newRace;
    this.racesChanged.next(this.races.slice());
}

deleteRace(index: number){
    this.races.splice(index, 1);
    this.racesChanged.next(this.races.slice());
}

}
