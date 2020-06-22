import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { SignComponent } from './sign/sign.component';
import { AboutComponent } from "./about/about.component";
import { NewsComponent } from './news/news.component';
import {EditPostComponent} from "./admin/posts/edit-post/edit-post.component";
import { UserprofileComponent } from './admin/userprofile/userprofile.component';
import { HeaderpanelComponent } from './admin/headerpanel/headerpanel.component';
import { AuthGuard } from './_helpers/auth.guard';
import { SignGuard } from './_helpers/sign.guard';
import { CreatePostComponent } from "./admin/posts/create-post/create-post.component";
import { PostComponent } from "./admin/posts/post/post.component";
import { UserPostsComponent } from "./admin/posts/user-posts/user-posts.component";
import { AdminComponent } from './admin/admin.component';
import { PublicComponent } from './public/public.component';
import { CreateTeamComponent } from './team/create-team/create-team.component';
import { EditTeamComponent } from './team/edit-team/edit-team.component';
import { ShowTeamsComponent } from './team/show-teams/show-teams.component';
import { EditTeamsComponent } from './team/edit-teams/edit-teams.component';
import { SingleTeamComponent } from './team/single-team/single-team.component';
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
          path: 'post/:id',
          component: PostComponent,
        },
        {
          path:'teams',
          children: [
            {
              path: '',
              component: ShowTeamsComponent
            },
            {
              path: ':id',
              component: SingleTeamComponent
            },
          ]
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
            path: 'create',
            component: CreatePostComponent,
          },
          {
            path: ':id',
            component: EditPostComponent,
          }
        ]
      },
      {
        path:'teams',
        children: [
          {
            path: '',
            component: EditTeamsComponent
          },
          {
            path: 'create',
            component: CreateTeamComponent
          },
          {
            path: 'edit/:id',
            component: EditTeamComponent
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

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  // ...any other options you'd like to use
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
