import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

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
 	//celui du service !!!
 	this.loveIts++;
 }

 onDislike(){
 	this.loveIts--;
 }

}
