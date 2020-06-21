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
import { CreatePostComponent } from './create-post/create-post.component';
import { PostComponent } from './post/post.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { JwPaginationModule } from 'jw-angular-pagination';

import { UserService } from './_services/user.service';
import { AuthService } from './_services/auth.service';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { HeaderpanelComponent } from './headerpanel/headerpanel.component';
import { SidebarpanelComponent } from './sidebarpanel/sidebarpanel.component';
import { AuthInterceptor } from './_helpers/auth.interceptor'
import { AuthGuard } from './_helpers/auth.guard';
import { SignGuard } from './_helpers/sign.guard';

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
    UserPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    ],
  providers: [
    UserService,
    AuthService,
    AuthGuard,
    SignGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    HttpClientModule,
    JwPaginationModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
