import { NgModule } from '@angular/core';

import{ HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { RunnerService } from '../runners/runners.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { RaceService } from '../races/races.service';
import { AuthGuard} from '../auth/auth-guard.service';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [
        RunnerService, RaceService, DataStorageService, AuthService, AuthGuard
    ]
})

export class CoreModule {}
