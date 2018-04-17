import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;
  @Input() indexOfPost: number;

  constructor(private _blogService: BlogService) { }

  ngOnInit() {
  }

  getFeedBack(){
  	if(this.loveIts > 0){
  		return "liked";
  	}
  	else if(this.loveIts<0){
  		return "disliked";
  	}
  	else{
  		return 'default';
  	}

  }
 onLike(){
   	this._blogService.likePost(this.indexOfPost);
 }

 onDislike(){
 	  this._blogService.dislikePost(this.indexOfPost);
 }

}
