import { Component, OnInit } from '@angular/core';
import{DataService} from '../services/data.service';
import {analyzeAndValidateNgModules} from '@angular/compiler';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentData:any = [];
  weatherData:any = [];

  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.service.GetStudentData().subscribe(
      (data)=>{
        this.studentData = data.students;
        console.log(this.studentData);

      }
    );
   // this.service.GetWeatherData().subscribe(
     // (wData)=>{
       // this.weatherData = wData.weather;
        //onsole.log(this.weatherData);
     // }
   // );
  }

}
