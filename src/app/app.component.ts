import { Component } from '@angular/core';
import * as firebase from 'firebase/app';


var firebaseConfig = {
    apiKey: "AIzaSyASCs88KIt8PxqSQIX-M23NnayQn3VJ1d8",
    authDomain: "enactus-865ef.firebaseapp.com",
    databaseURL: "https://enactus-865ef.firebaseio.com",
    projectId: "enactus-865ef",
    storageBucket: "enactus-865ef.appspot.com",
    messagingSenderId: "951689799496",
    appId: "1:951689799496:web:7680db767e3e03d2f6b57d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Enactus';
}
