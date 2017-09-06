import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RaceComponent } from './races.component';
import { RacesStartComponent } from './races-start/races-start.component';
import { RacelistComponent } from './race-list/racelist.component';
import { RaceeditComponent} from './race-edit/raceedit.component';
import { RacesDetailsComponent } from './races-details/races-details.component';
import { RaceItemComponent } from './race-list/race-item/race-item.component';
import {RacesRoutingModule} from './races-routing.module';
import { SharedModule}  from '../shared/shared.module';



@NgModule({
    declarations: [
        RaceComponent,
        RacesStartComponent,
        RacelistComponent,
        RaceeditComponent,
        RacesDetailsComponent,
        RaceItemComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RacesRoutingModule,
        SharedModule
    ]
})
export class RacesModule{}
