import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { SignComponent } from './sign/sign.component';
import { AboutComponent } from "./about/about.component";
import { NewsComponent } from './news/news.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { HeaderpanelComponent } from './headerpanel/headerpanel.component';
import { AuthGuard } from './_helpers/auth.guard';
import { SignGuard } from './_helpers/sign.guard';
import { CreatePostComponent} from "./create-post/create-post.component";
import { PostComponent} from "./post/post.component";
import {UserPostsComponent} from "./user-posts/user-posts.component";



const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'sign',
    component: SignComponent,canActivate:[SignGuard],
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'userprofile',
    component: UserprofileComponent,canActivate:[AuthGuard],
  },
  {
    path: 'headerpanel',
    component: HeaderpanelComponent,canActivate:[AuthGuard],
  },
  {
    path: 'create_post',
    component: CreatePostComponent,
  },
  {
    path: 'post',
    component: PostComponent,
  },
  {
    path:'user_posts',
    component: UserPostsComponent,
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
