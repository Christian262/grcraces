import { Runner } from '../shared/runners.model';
import{ Subject } from 'rxjs/Subject';

export class RunnerService{
    runnersChanged = new Subject<Runner[]>();
    startedEditing = new Subject<number>();
    private runners: Runner[] = [
        new Runner(0, 'Christian', 'Lautenschleger',)
    ];
    getRunners(){
        return this.runners.slice();
    }

    getRunner(index: number){
        return this.runners[index];
    }

    addRunner(runner: Runner) {
        this.runners.push(runner);
        this.runnersChanged.next(this.runners.slice());
    }

    addRunners(runners: Runner[]){
        // for (let runner of runners){
        //     this.addRunner(runner);
        // }
        this.runners.push(...runners);
        this.runnersChanged.next(this.runners.slice());
    }

    updateRunner(index: number, newRunner: Runner){
        this.runners[index] = newRunner;
        this.runnersChanged.next(this.runners.slice());
    }

    deleteRunner(index: number){
        this.runners.splice(index, 1);
        this.runnersChanged.next(this.runners.slice());
    }
}
