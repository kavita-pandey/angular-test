import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { TeacherSignupComponent } from './teacher-signup/teacher-signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FrontDashboardComponent } from './front-dashboard/front-dashboard.component';
import { NoPageComponent } from './no-page/no-page.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentResultComponent } from './student-result/student-result.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherDashboardComponent,
    HeaderComponent,
    TeacherLoginComponent,
    TeacherSignupComponent,
    NavbarComponent,
    FrontDashboardComponent,
    NoPageComponent,
    StudentDashboardComponent,
    StudentResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
