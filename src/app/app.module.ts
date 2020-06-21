import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { SignComponent } from './sign/sign.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { CreatePostComponent } from './admin/posts/create-post/create-post.component';
import { PostComponent } from './admin/posts/post/post.component';
import { UserPostsComponent } from './admin/posts/user-posts/user-posts.component';
import { JwPaginationModule } from 'jw-angular-pagination';
import { EditPostComponent } from './admin/posts/edit-post/edit-post.component';
import { CreateTeamComponent } from './team/create-team/create-team.component';
import { EditTeamComponent } from './team/edit-team/edit-team.component';
import { ShowTeamsComponent } from './team/show-teams/show-teams.component';
import { EditTeamsComponent } from './team/edit-teams/edit-teams.component';
import { SingleTeamComponent } from './team/single-team/single-team.component';

import { UserService } from './_services/user.service';
import { AuthService } from './_services/auth.service';
import { UserprofileComponent } from './admin/userprofile/userprofile.component';
import { HeaderpanelComponent } from './admin/headerpanel/headerpanel.component';
import { SidebarpanelComponent } from './admin/sidebarpanel/sidebarpanel.component';
import { AuthInterceptor } from './_helpers/auth.interceptor'
import { AuthGuard } from './_helpers/auth.guard';
import { SignGuard } from './_helpers/sign.guard';
import { AdminComponent } from './admin/admin.component';
import { PublicComponent } from './public/public.component';
import { FeedComponent } from './feed/feed.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    SignComponent,
    AboutComponent,
    NewsComponent,
    UserprofileComponent,
    HeaderpanelComponent,
    SidebarpanelComponent,
    CreatePostComponent,
    PostComponent,
    UserPostsComponent,
    EditPostComponent,
    CreateTeamComponent,
    EditTeamComponent,
    ShowTeamsComponent,
    EditTeamsComponent,
    SingleTeamComponent,
    AdminComponent,
    PublicComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwPaginationModule
  ],
  providers: [
    UserService,
    AuthService,
    AuthGuard,
    SignGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
