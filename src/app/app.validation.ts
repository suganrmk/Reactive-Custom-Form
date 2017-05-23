import { Component } from '@angular/core';
import { AbstractControl , ValidatorFn } from '@angular/forms';

import $ from 'jquery/dist/jquery';



export class Validation {
 
  
static ValidateUrl(control: AbstractControl , type: any) {
 if (!control.value.startsWith('https') || !control.value.includes('.io')) {
    return { validUrl: true };
  }
  return null;
}




//Range MIN MAX
  static   minValueValidatord = (min:number , max:number) => {
      return (control) => {
        var num = +control.value;
        
          if(isNaN(num) || num < min || num > max){
            return {
              minValue: {minValueValidatord: true},
              
            };
          }
        return null;
      };
  }


  //Range MIN MAX
  static   Daterange = (min:string , max:string) => {
      return (control) => {
      var MinDate = new Date(min);
      var MaxDate = new Date(max);
      var SelectedDate = new Date(control.value);

            if(MinDate < SelectedDate && MaxDate > SelectedDate ){
            return {
                minrange: {Daterange: true}
              };
            }
          return null;
  };
  }


//Min DAte
  static   MinDate = (min:string) => {
      return (control) => {
      var MinDate = new Date(min);
      var SelectedDate = new Date(control.value);

            if(MinDate < SelectedDate ){
            return {
                minDaterange: {MinDate: true}
              };
            }
          return null;
  };
  }



  //MaxDate
  static   Maxdate = ( max:string) => {
      return (control) => {
      var MaxDate = new Date(max);
      var SelectedDate = new Date(control.value);

            if(MaxDate > SelectedDate ){
            return {
                maxDaterange: {Maxdate: true}
              };
            }
          return null;
  };
  }


  }



