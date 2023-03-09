import { Pipe, PipeTransform } from '@angular/core';
import { student } from './model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(students:student[],gender:string) {
    if (students.length===0 || gender===""){
      return students;
    }else{
      return students.filter((val)=>{
        return val.gender.toLowerCase() === gender.toLowerCase()
      })
    }
  }

}
