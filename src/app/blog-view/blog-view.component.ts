import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService} from '../services/blog.service'
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit, OnDestroy {

  posts: any[];
  postsSubscription: Subscription;

   constructor(private _blogService: BlogService) { }
  
  ngOnInit() {
  	  this.postsSubscription = this._blogService.postSubject.subscribe(
  	  	(posts: any[]) => {
  	  		this.posts = posts;
  	  	}
  	  );
  	  //Ne pas oublier apres la souscription de faire emetre le subject !!!!!!!!!  (emet copie des posts du service)
  	  this._blogService.emitPostSubject();    
  }

   ngOnDestroy() {
   		this.postsSubscription.unsubscribe();
   }

}
