import { Component,OnInit } from '@angular/core';
import {StudentsService} from './students.service';
import {student} from './model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentsService]
})
export class AppComponent implements OnInit {
  title = 'AngularPipes';
  constructor(private studentsservice:StudentsService){
    
  }
  students:student[];
  inputText:string="";
  totalStudents = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(this.students.length)
    },2000)
  })

  ngOnInit(){
    this.students =  this.studentsservice.students;
  }
  
}
