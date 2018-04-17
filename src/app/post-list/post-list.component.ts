import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input()  posts : any[];
  
  constructor() { }

  ngOnInit() {
  }

onAddBlog(){
	var post = {
		title: "a new post",
		content: "this is a new message",
		loveIts: 0,
		created_at: new Date()
	};

	this.posts.push(post);
}

}
