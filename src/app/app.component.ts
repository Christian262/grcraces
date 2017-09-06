import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
    loadedFeature = 'race';

    ngOnInit(){
        firebase.initializeApp({
        apiKey: "AIzaSyCPPqjiQ1xcUUpj2CxYnqwDGxGHIAxCGSo",
        authDomain: "grc-races.firebaseapp.com"
        });
    }

    onNavigate(feature: string){
        this.loadedFeature = feature;
    }

}
