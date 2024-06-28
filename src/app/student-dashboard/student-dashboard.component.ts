import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';



@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  findStudent = new FormGroup({
    rollnumber: new FormControl(''),
    name: new FormControl('')
  })

  constructor(private formbuilder:FormBuilder, private api:ApiService, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    
  }

  searchResult(){
    alert("Employee added sucessfully")
    this.api.find(this.findStudent.value);

  }
}
