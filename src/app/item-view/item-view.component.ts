import { Component, OnInit } from '@angular/core';
import {BlogService} from '../services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {

  title: string;
  content: string;
  loveIts: number;
  created_at: Date;

  constructor(private _blogService: BlogService, private _route:ActivatedRoute, private _router: Router) { }

  ngOnInit() {
  	const id = this._route.snapshot.params['id'];
  	
  	//+id => + pour caster id qui est une string en number
  	var post = this._blogService.getPostById(+id);

  	if(post ===undefined){
  		this._router.navigate(['/not-found']);
  	}

  	this.title = post.title;
  	this.content = post.content;
  	this.loveIts = post.loveIts;
  	this.created_at = post.created_at;
  }

}
