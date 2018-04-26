import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { ErrorComponent } from './error/error.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';
import { NewUserComponent } from './new-user/new-user.component';

const appRoutes: Routes = [
  { path: '', component: BlogViewComponent },
  {
    path: 'posts',
    component: BlogViewComponent
  },
  {
    path: 'new',
    component: NewPostComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'new-user',
    component: NewUserComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'item/:id',
    component: ItemViewComponent
  },
  {
    path: 'not-found',
    component: ErrorComponent
  },
  //Wild card => ** => A mettre à la fin !!!!
  // verifie toutes les routes et si ne trouve pas, redirige (en dernier donc) vers /not-found.......
  {
    path: '**',
    redirectTo: '/not-found'
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
    ItemViewComponent,
    ErrorComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BlogService, AuthService, AuthGuardService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
