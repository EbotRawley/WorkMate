import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { JobListComponent } from './jobs/job-list/job-list.component';
import { JobDetailComponent } from './jobs/job-detail/job-detail.component';
import { CreateJobComponent } from './jobs/create-job/create-job.component';
import { GigListComponent } from './gigs/gig-list/gig-list.component';
import { GigDetailComponent } from './gigs/gig-detail/gig-detail.component';
import { CreateGigComponent } from './gigs/create-gig/create-gig.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'jobs', component: JobListComponent },
  { path: 'jobs/:id', component: JobDetailComponent },
  { path: 'create-job', component: CreateJobComponent },
  { path: 'gigs', component: GigListComponent },
  { path: 'gigs/:id', component: GigDetailComponent },
  { path: 'create-gig', component: CreateGigComponent },
  // Add more routes as needed
  { path: '**', redirectTo: '' } // Redirect to home page for unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
