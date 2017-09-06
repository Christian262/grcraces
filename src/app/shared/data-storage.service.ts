import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { RaceService } from '../races/races.service';
import { Race } from '../races/races.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService{
    constructor(private http: Http,
                private raceService: RaceService,
                private authService: AuthService){}

    storeRaces(){
        const token =  this.authService.getIdToken();
        return this.http.put('https://grc-races.firebaseio.com/races.json?auth=' + token, this.raceService.getRaces());
    }

    getRaces(){
        const token =  this.authService.getIdToken();
        this.http.get('https://grc-races.firebaseio.com/races.json?auth=' + token)
        .map(
            (response: Response) => {
                const races: Race[] = response.json();
                for (let race of races){
                    if(!race['runners']){
                        race['runners'] = [];
                    }
                }
                return races;
            }
        )
        .subscribe(
            (races: Race[]) => {
                this.raceService.setRaces(races);
            }
        )
    }

    getIdToken(){
        return firebase.auth().currentUser.getIdToken();
    }

    }
