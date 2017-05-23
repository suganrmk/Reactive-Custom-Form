import { Component } from '@angular/core';
import { FormBuilder , FormGroup , Validators  , FormControl } from '@angular/forms';
import { Validation } from './app.validation';

  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  rForm: FormGroup;
  MinMaxNumber: number;
  post:any;
  date1: Date;
  FromDate: Date;
  ToDate: Date;
  mins: Date = new Date("05-02-2017");
  FromDateInput: Date;


 constructor(private fb : FormBuilder){
  
  this.rForm = fb.group({
    'MinMaxNumber':['', [Validators.required, Validation.minValueValidatord(5 , 15)]],
    'date1': ['', [Validators.required, Validation.Daterange("04-01-2017" , "06-01-2017")]],
    'FromDate': ['', [Validators.required, Validation.MinDate("05-01-2017")]],
    'ToDate': ['', [Validators.required, Validation.Maxdate("05-11-2017")]],
    'websiteUrl': ['', [Validators.required, Validation.ValidateUrl]],
  });
 }



 addPost(post){
 }

 ngonInit(){

 }
}
