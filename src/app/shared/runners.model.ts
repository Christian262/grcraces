import {Race } from '../races/races.model';

export class Runner{
    constructor(public id: number,
        public firstName: string,
        public lastName:string,
        public email: string,
        public password: string,
        public raceFavorites: [string],
        public comments: string,
        public races: Race[],
        ){}
}
