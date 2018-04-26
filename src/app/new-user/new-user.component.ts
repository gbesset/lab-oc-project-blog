import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormArray } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../model/User.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;

//outils qui permet de créer des formulaire plus facilement et plus lisibles
  constructor(private formBuilder:FormBuilder, private userService:UserService, private router:Router) { }

  ngOnInit() {
  	this.initForms()
  }

  initForms(){
  	this.userForm = this.formBuilder.group(
  			{
  				firstName: ['', Validators.required],
  				lastName: ['', Validators.required],
  				email: ['', [Validators.required, Validators.email]],
  				drinkPreference:['', Validators.required],
  				hobbies: this.formBuilder.array([])
  			}
  		);
  }

  onSubmitForm(){
  	 const formValue = this.userForm.value;
  	 const newUser = new User(formValue['firstName'],
  	 						  formValue['lastName'],
  	 						  formValue['email'],
  	 						  formValue['drinkPreference'],
  	 						  formValue['hobbies'] ? formValue['hobbies'] : []
  	 					 );

  	 this.userService.addUser(newUser);
  	 this.router.navigate(['/users'])
  }

  //pour raison typage stricte, retoure 
  getHobbies(){
  	return this.userForm.get('hobbies') as FormArray;
  }

  OnAddHobby(){
  	//Ajouter ce nouveau control au formArray permettant utilisateur ajouter son hobby
  	//a partir moment créer un hobby, champ requis
  	const newHobbyFormControl = this.formBuilder.control('', Validators.required);
  	this.getHobbies().push(newHobbyFormControl);
  }

}
