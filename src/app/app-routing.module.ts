import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoPageComponent } from './no-page/no-page.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { TeacherSignupComponent } from './teacher-signup/teacher-signup.component';
import {FrontDashboardComponent} from './front-dashboard/front-dashboard.component'
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentResultComponent } from './student-result/student-result.component';

const routes: Routes = [
  {path:'', component:FrontDashboardComponent},
  // {path:'', redirectTo:'front-dashboard', pathMatch:'full'},
  // {path:'', redirectTo:'teacher-login', pathMatch:'full'},
  {path:'teacher-login', component:TeacherLoginComponent},
  {path:'teacher-login', component:TeacherLoginComponent},
  {path:'teacher-signup', component:TeacherSignupComponent},
  {path:'teacher-dashboard', component:TeacherDashboardComponent},
  {path:'student-dashboard', component:StudentDashboardComponent},
  {path:'student-result', component:StudentResultComponent},
  {
    path:'**',
    component:NoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
