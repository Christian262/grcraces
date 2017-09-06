import { Component, OnInit, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Runner } from '../../../shared/runners.model';
import { RunnerService } from '../../../runners/runners.service';

@Component({
  selector: 'app-runners-edit',
  templateUrl: './runners-edit.component.html',
  styleUrls: ['./runners-edit.component.css']
})
export class RunnersEditComponent implements OnInit {
    @ViewChild('f') rlForm: NgForm;
    subscription: Subscription;
    editMode = false;
    editedItemIndex: number;
    editedItem: Runner;

  constructor(private runnerService: RunnerService) { }

  ngOnInit() {
     this.subscription = this.runnerService.startedEditing.subscribe(
         (index: number) => {
             this.editedItemIndex = index;
             this.editMode = true;
             this.editedItem = this.runnerService.getRunner(index);
             this.rlForm.setValue({
                 firstName: this.editedItem.firstName,
                 lastName: this.editedItem.lastName
             })
         }
     );
  }

  onAddItem(form: NgForm){
      const value = form.value;
      const newRunner = new Runner(value.firstName, value.lastName);
      if (this.editMode){
        this.runnerService.updateRunner(this.editedItemIndex, newRunner)
    }else{
    this.runnerService.addRunner(newRunner);
    }
    this.editMode = false;
    form.reset();
  }

  onClear(){
      this.rlForm.reset();
      this.editMode = false;
  }

  onDelete(){
      this.runnerService.deleteRunner(this.editedItemIndex);
      this.onClear();
  }

  ngOnDestroy(){
      this.subscription.unsubscribe();
  }

}
