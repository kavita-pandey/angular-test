import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent implements OnInit {

  public teacherLoginForm !: FormGroup
  constructor(private formbuilder:FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.teacherLoginForm=this.formbuilder.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })
  }

  loginForm(){
    this.http.get<any>("http://localhost:3000/teacherSignup")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.email===this.teacherLoginForm.value.email && a.password===this.teacherLoginForm.value.password
      })
      if(user){
        alert("Login Success");
        this.teacherLoginForm.reset()
        this.router.navigate(['teacher-dashboard'])
      }else{
        alert("User not find")
      }
    },err=>{
      alert("Something went wrong...!")
    })
  }

}
