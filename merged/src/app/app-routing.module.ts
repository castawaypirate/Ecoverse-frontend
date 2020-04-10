import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { SignComponent } from './sign/sign.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path : 'sign',
    component: SignComponent
  },
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: '**',
    component: HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
