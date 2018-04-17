import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	connectedFromSeconds: number;

	constructor() {} 
 
   ngOnInit(){
   	  //  crée un observale qui émet un chiffre toutes les secondes
   	  const counter = Observable.interval(1000);


   	  //observer le compteur
   	  //Subscribe permet observer un observable et réagir a ses changements
   	  counter.subscribe(
   	  	//changement valeur (recoit les données)
   	  	(value: number) => {
   	  		this.connectedFromSeconds = value;
   	  	},
   	  	//erreur emise par l'observable
   	  	(error: any) => {
   	  		console.log('Erreur rencontrée par l\'observable');
   	  	},
   	  	//si observale se complete

   	  	() => {
   	  		console.log('Observale completé');
   	  	}
   	  )
   }
}
