import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component'; // Import FormsModule for form handling

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ProfileComponent,
    JobListComponent,
    JobDetailComponent,
    CreateJobComponent,
    GigListComponent,
    GigDetailComponent,
    CreateGigComponent,
    InboxComponent,
    MessageDetailComponent,
    SettingsComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule // Add FormsModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

