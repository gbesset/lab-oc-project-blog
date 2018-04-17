import { Component, OnInit } from '@angular/core';
import { BlogService} from './services/blog.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'app';
  posts: any[];

   constructor(private _blogService: BlogService) { }
  
  ngOnInit() {
      this.posts = this._blogService.posts;
  }
}
