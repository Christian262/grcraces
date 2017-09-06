import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import{AuthGuard} from '../auth/auth-guard.service';
import { RaceComponent } from './races.component';
import { RacesStartComponent } from './races-start/races-start.component';
import { RacesDetailsComponent } from './races-details/races-details.component';
import { RaceeditComponent } from './race-edit/raceedit.component';

const racesRoutes: Routes = [
    {path: '', component: RaceComponent},
    {path: '', component: RacesStartComponent},
    {path: 'new', component: RaceeditComponent, canActivate: [AuthGuard]},
    {path: ':id', component: RacesDetailsComponent},
    {path: ':id/edit', component: RaceeditComponent, canActivate: [AuthGuard]},

];

@NgModule({
    imports: [
        RouterModule.forChild(racesRoutes)
    ],
    exports: [RouterModule]
})

export class RacesRoutingModule {}
