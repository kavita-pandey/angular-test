import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-teacher-signup',
  templateUrl: './teacher-signup.component.html',
  styleUrls: ['./teacher-signup.component.css']
})
export class TeacherSignupComponent implements OnInit {

  public teacherSignupForm !: FormGroup;
  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.teacherSignupForm=this.formBuilder.group({
      fullname:['', Validators.required],
      mobile:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required],
    })
  }

  signUp(){
    this.http.post<any>("http://localhost:3000/teacherSignup", this.teacherSignupForm.value)
    .subscribe(res=>{
      alert("Signup sucessfull")
      this.teacherSignupForm.reset()
      this.router.navigate(['teacher-login'])
    },
    err=>{
      alert("Something went wrong")
    })
  }

}
