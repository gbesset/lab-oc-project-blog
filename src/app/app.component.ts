import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/Rx';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
	connectedFromSeconds: number;
	counterSubscription: Subscription;

	constructor() {} 
 
   ngOnInit(){
   	  //  crée un observale qui émet un chiffre toutes les secondes
   	  const counter = Observable.interval(1000);


   	  //observer le compteur
   	  //Subscribe permet observer un observable et réagir a ses changements
   	  this.counterSubscription = counter.subscribe(
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
   	  );
   }

   ngOnDestroy(){
   	//Pour éviteer pb bug infiny : Détruire la subscription a la fin de la vie du Component
   	this.counterSubscription.unsubscribe();
   }
}
