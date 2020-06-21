import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { SignComponent } from './sign/sign.component';
import { AboutComponent } from "./about/about.component";
import { NewsComponent } from './news/news.component';
import { UserprofileComponent } from './admin/userprofile/userprofile.component';
import { HeaderpanelComponent } from './admin/headerpanel/headerpanel.component';
import { AuthGuard } from './_helpers/auth.guard';
import { SignGuard } from './_helpers/sign.guard';
import { CreatePostComponent } from "./admin/posts/create-post/create-post.component";
import { PostComponent } from "./admin/posts/post/post.component";
import { UserPostsComponent } from "./admin/posts/user-posts/user-posts.component";
import { AdminComponent } from './admin/admin.component';
import { PublicComponent } from './public/public.component';
import { FeedComponent } from './feed/feed.component';



const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children:
      [
        {
          path: '',
          component: HomepageComponent,
        },
        {
          path: 'contact',
          component: ContactComponent,
        },
        {
          path: 'sign',
          component: SignComponent, canActivate: [SignGuard],
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
          path: 'feed',
          component: FeedComponent
        }
      ]
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    component: AdminComponent,
    children: [
      {
        path: '',
        component: UserprofileComponent,
      },
      {
        path: 'headerpanel',
        component: HeaderpanelComponent,
      },
      {
        path: 'posts',
        children: [
          {
            path: '',
            component: UserPostsComponent,
          },
          {
            path: ':id',
            component: PostComponent,
          },
          {
            path: 'create_post',
            component: CreatePostComponent,
          }
        ]
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
