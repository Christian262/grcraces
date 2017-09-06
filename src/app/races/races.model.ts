import { Runner } from '../shared/runners.model';

export class Race {
    public id: 0;
    public name: string ;
    public description: string;
    public imagePath: string;
    public date: string;
    public runners: Runner[];

    constructor(name: string, desc: string, imagePath: string, date: string, runners: Runner[]){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.date = date;
        this.runners = runners;
    }
}
