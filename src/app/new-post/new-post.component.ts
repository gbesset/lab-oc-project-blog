import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(private _blogService: BlogService,private _router:Router) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
  	//console.log(form.value);
  		const title = form.value['title'];
  		const content = form.value['content'];
  		this._blogService.addNewPost(title, content);
  		this._router.navigate(['posts'])
  }

}
