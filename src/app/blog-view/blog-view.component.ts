import { Component, OnInit } from '@angular/core';
import { BlogService} from '../services/blog.service'

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  posts: any[];

   constructor(private _blogService: BlogService) { }
  
  ngOnInit() {
      this.posts = this._blogService.posts;
  }

}
