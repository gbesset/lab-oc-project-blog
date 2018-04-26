import { Injectable } from '@angular/core';
import { User } from '../model/User.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {

  private users: User[] = [
     {
       firstName:'john', 
       lastName: 'doe', 
       email: 'jdoe@fmail.com',
       drinkPreference: 'jus d\'orange',
       hobbies: ['coder', 'boire du café']
    }
  ];
  userSubject = new Subject<User[]>();		//Patern SUbject qui emet des array de type User

  constructor() { }

  emitUsers(){
    //appele la methode next sur userSubject
  	//emet une copie de l'array user
    this.userSubject.next(this.users.slice());
  }

  addUser(user:User){
  	this.users.push(user);
  	this.emitUsers();				//fait emetre le subject
  }


}
  