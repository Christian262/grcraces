import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { RunnerService } from '../runners/runners.service';
import { Runner } from '../shared/runners.model';

@Component({
  selector: 'app-runners',
 templateUrl: './runners.component.html',
  styleUrls: ['./runners.component.css']
})
export class RunnersComponent implements OnInit {
    runners: Runner[];
    private subscription: Subscription;

  constructor(private runnerService: RunnerService) {

  }

  ngOnInit() {
      this.runners = this.runnerService.getRunners();
      this.subscription = this.runnerService.runnersChanged
        .subscribe(
            (runners: Runner[]) => {
                this.runners = runners;
            }
        );
  }

  onEditItem(index: number){
      this.runnerService.startedEditing.next(index);
  }

  ngOnDestroy(){
      this.subscription.unsubscribe();
  }

// onRunnerAdded(runners: Runner){
//     this.runners.push(runners);
// }

}
