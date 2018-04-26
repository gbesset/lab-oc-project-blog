import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { User } from '../model/User.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  users: User[];
  userSubscription: Subscription;

  constructor(private _userService:UserService) { }


	//dès que le component est crée, il va se souscrire au subject et le fera emetre
  ngOnInit() {
  	//souscrire au subject dans le service qui va emetre un array de type user      (créer la souscription)
  	this.userSubscription = this._userService.userSubject.subscribe(
  			(users:User[]) => {
  				this.users = users;
  			}
  		);
  	this._userService.emitUsers();
  }


	ngOnDestroy(){
		this.userSubscription.unsubscribe();
	}
}
