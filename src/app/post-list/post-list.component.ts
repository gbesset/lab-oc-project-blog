import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  blogs = [
  	{
  		title: 'Blog post #3',
  		content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  		loveIts: 0,
  		created_at: new Date('2018-04-06T17:00:00')
  	},
  	{
		title: 'Blog post #2',
  		content: `Sed (saepe enim redeo ad Scipionem, cuius omnis sermo erat de amicitia) querebatur, 
  				  quod omnibus in rebus homines diligentiores essent; capras et oves quot quisque haberet,
  				   eligendi; cuius generis est magna penuria. Et iudicare difficile est sane nisi expertum; e
  				   xperiendum autem est in ipsa amicitia. Ita praecurrit amicitia iudicium tollitque experiendi potestatem`,
  		loveIts: -2,
  		created_at: new Date('2018-04-05T17:00:00')
  	},
  	{
		title: 'Blog Post #1',
  		content: `Potest me solent diceret ob dissentientium videri a si videri dissentientium disputando rem a potest iracundiae
  					 solent mihi inquam sunt non videri dicas Triari iracundiae Epicureum mihi indignae pacto me.`,
  		loveIts: +4,
  		created_at: new Date('2018-04-04T17:00:00')
  	}

  ];
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

	this.blogs.push(post);
}

}
