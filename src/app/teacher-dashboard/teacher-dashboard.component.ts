import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import { TeacherModel } from './teacher-dash board.model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {

  formValue!: FormGroup;
  teacherModelObj:TeacherModel=new TeacherModel();
  teacherData !: any
  showAdd !: boolean
  showUpdate !: boolean

  constructor(private formbuilder:FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      rollnumber:[''],
      name:[''],
      dob:[''],
      score:['']
    })
    this.getAllResult()
  }

  postResult(){
    this.teacherModelObj.rollnumber=this.formValue.value.rollnumber;
    this.teacherModelObj.name=this.formValue.value.name;
    this.teacherModelObj.dob=this.formValue.value.dob;
    this.teacherModelObj.score=this.formValue.value.score;

    this.api.postResult(this.teacherModelObj)
    .subscribe(res=>{
      console.log(res)
      alert("Employee added sucessfully")
      let ref=document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllResult()
    },
    err=>{
      alert("Something went wrong")
    })

  }

  getAllResult(){
    this.api.getResult()
    .subscribe(res=>{
      this.teacherData=res;
    })
  }

  deleteResult(row:any){
    this.api.deleteResult(row.id)
    .subscribe(res=>{
      alert("Employee deleted")
      this.getAllResult()
    })
  }

  onEdit(row:any){
    this.showAdd=false;
    this.showUpdate=true;

    this.teacherModelObj.id=row.id
    this.formValue.controls['rollnumber'].setValue(row.rollnumber);
    this.formValue.controls['name'].setValue(row.name);
    this.formValue.controls['dob'].setValue(row.dob);
    this.formValue.controls['score'].setValue(row.score);
  }

  updateResult(){
    this.teacherModelObj.rollnumber=this.formValue.value.rollnumber;
    this.teacherModelObj.name=this.formValue.value.name;
    this.teacherModelObj.dob=this.formValue.value.dob;
    this.teacherModelObj.score=this.formValue.value.score;

    this.api.updateResult(this.teacherModelObj, this.teacherModelObj.id)
    .subscribe(res=>{
      alert("Update Successfully")
      let ref=document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllResult()
    })

  }

  clickAddResult(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }

}
