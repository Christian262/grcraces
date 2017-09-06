import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {RunnersComponent } from './runners.component';
import { RunnersEditComponent} from './runners-runners/runners-edit/runners-edit.component';

@NgModule({
    declarations: [
        RunnersComponent,
        RunnersEditComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})

export class RunnersModule {}
