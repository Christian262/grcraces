import { Component, OnInit } from '@angular/core';
import{ Runner } from '../../shared/runners.model';

@Component({
  selector: 'app-runners-list',
  templateUrl: './runners-list.component.html',
  styleUrls: ['./runners-list.component.css']
})
export class RunnersListComponent implements OnInit {
    runners: Runner[] = [
        new Runner('Christian', 'Lautenschleger'),
        new Runner('William', 'Miller'),
        new Runner('Pretty', 'Kasten'),
    ];

  constructor() { }

  ngOnInit() {
  }

}
