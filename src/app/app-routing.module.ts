import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { RunnersComponent } from './runners/runners.component';
import { HomeComponent } from './core/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    { path: 'races', loadChildren: './races/race.module#RacesModule'},
    {path: 'runners', component: RunnersComponent},
    {path: 'not-found', component: PageNotFoundComponent},
    // {path: '**', redirectTo: '/not-found' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
