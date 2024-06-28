import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url="http://localhost:3000/posts"

  private msgSource = new BehaviorSubject({});  
  
current = this.msgSource.asObservable();

  constructor(private http:HttpClient) { }

  postResult(data:any){
    return this.http.post<any>("http://localhost:3000/posts", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getResult(){
    return this.http.get<any>("http://localhost:3000/posts")
    .pipe(map((res:any)=>{
      return res;
    }))
  }


  updateResult(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/posts/"+id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteResult(id:any){
    return this.http.delete<any>("http://localhost:3000/posts/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  find(data:{rollnumber:number,name:string}){
    return this.http.get(`${this.url}?rollnumber=${data.rollnumber}&name=${data.name}`)
    .subscribe((res) =>{ 
      this.msgSource.next(res); 
    })
  }

}
