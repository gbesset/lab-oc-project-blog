import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { BlogService } from './services/blog.service';
import { NewPostComponent } from './new-post/new-post.component';

import { RouterModule, Routes } from '@angular/router';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { AuthService } from './services/auth.service';
import { AuthComponent } from './auth/auth.component';
import { ItemViewComponent } from './item-view/item-view.component';


const appRoutes: Routes = [
  { path: '', component: BlogViewComponent },
  {
    path: 'posts',
    component: BlogViewComponent
  },
  {
    path: 'new',
    component: NewPostComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'item/:id',
    component: ItemViewComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
    BlogViewComponent,
    AuthComponent,
    ItemViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [BlogService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
