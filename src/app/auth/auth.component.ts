import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit() {
  	this.authStatus = this._authService.isAuth;
  }

  onSignIn(){
  	this._authService.signIn().then(
  		() => {
  			console.log('Connexion réussie');
  			this.authStatus = this._authService.isAuth;
        this._router.navigate(['posts']);
  		}
  	);
  }

  onSignOut(){
  	this._authService.signOut();
  	this.authStatus = this._authService.isAuth;
  	console.log('Déconnexion réussie');
  }

}
