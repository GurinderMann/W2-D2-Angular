import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActivePostsComponent } from './active-posts/active-posts.component';
import { InactivePostsComponent } from './inactive-posts/inactive-posts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'active-posts', component: ActivePostsComponent },
  { path: 'inactive-posts', component: InactivePostsComponent },
  { path: '**', redirectTo: '/' } // Redirect all other routes to the home page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
