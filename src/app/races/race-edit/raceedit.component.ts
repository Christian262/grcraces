import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { RaceService } from '../races.service';

@Component({
  selector: 'app-raceedit',
  templateUrl: './raceedit.component.html',
  styleUrls: ['./raceedit.component.css']
})
export class RaceeditComponent implements OnInit {
    id: number;
    editMode = false;
    raceForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private raceService: RaceService,
              private router: Router) {
  }

  ngOnInit() {
      this.route.params.subscribe(
          (params: Params) => {
              this.id = +params['id'];
              this.editMode = params['id'] != null;
              this.initForm();
          }
      );
  }

  onSubmit(){
    //   const newRace = new Race(
    //       this.raceForm.value['name'],
    //       this.raceForm.value['description'],
    //       this.raceForm.value['date'],
    //       this.raceForm.value['imagePath']);
      if (this.editMode){
          this.raceService.updateRace(this.id, this.raceForm.value);
      } else{
          this.raceService.addRace(this.raceForm.value);
      }
      this.onCancel();
  }

  onAddRunner(){
      (<FormArray>this.raceForm.get('runners')).push(
          new FormGroup({
              'firstName': new FormControl(null, Validators.required),
              'lastName': new FormControl(null, Validators.required)
         })
     );
  }

  onDeleteRunner(index:number){
      (<FormArray>this.raceForm.get('runners')).removeAt(index);
  }

  onCancel(){
      this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm(){
      let raceName = '';
      let raceImagePath = '';
      let raceDate = '';
      let raceDescription = '';
      let raceRunners = new FormArray([]);

      if (this.editMode){
          const race = this.raceService.getRace(this.id);
          raceName = race.name;
          raceDate = race.date;
          raceDescription = race.description;
          raceImagePath = race.imagePath;
          if(race['runners']){
              for(let runner of race.runners){
                  raceRunners.push(
                      new FormGroup({
                          'firstName': new FormControl(runner.firstName, Validators.required),
                          'lastName': new FormControl(runner.lastName, Validators.required)
                      })
                  );
              }
          }
      }

      this.raceForm = new FormGroup({
          'name': new FormControl(raceName, Validators.required),
          'imagePath': new FormControl(raceImagePath, Validators.required),
          'date': new FormControl(raceDate, Validators.required),
          'description': new FormControl(raceDescription, Validators.required),
          'runners': raceRunners
      })
  }

}
