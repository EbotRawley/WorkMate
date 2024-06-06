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
import { InboxComponent } from './messaging/inbox/inbox.component';
import { MessageDetailComponent } from './messaging/message-detail/message-detail.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthReverseGuard } from './auth/auth-reverse.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [AuthReverseGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [AuthReverseGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'jobs', component: JobListComponent, canActivate: [AuthGuard] },
  { path: 'jobs/:id', component: JobDetailComponent, canActivate: [AuthGuard] },
  { path: 'create-job', component: CreateJobComponent, canActivate: [AuthGuard] },
  { path: 'gigs', component: GigListComponent, canActivate: [AuthGuard] },
  { path: 'gigs/:id', component: GigDetailComponent, canActivate: [AuthGuard] },
  { path: 'create-gig', component: CreateGigComponent, canActivate: [AuthGuard] },
  { path: 'inbox', component: InboxComponent, canActivate: [AuthGuard] },
  { path: 'message/:id', component: MessageDetailComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
