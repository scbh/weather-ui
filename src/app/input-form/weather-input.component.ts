import {Component, OnInit} from '@angular/core';
import {Service} from '../service';

@Component({
    selector: 'weather-input',
    templateUrl: 'weather-input.component.html',
    styleUrls: ['./weather-input.component.css']
  })
  
  export class WeatherInputComponent implements OnInit {

    constructor (private userService: Service) {}
    
    public condition: any;
    public error: string;
    public unit: string;

    ngOnInit() {}

    callWeatherapi(value, unit) {
      const validValue= this.validateValue(value);
      
      this.unit = this.validateUnit(unit) ;
      
      let url = '/weather';

      this.userService.getWeatherInformation(url, validValue, this.unit)
      .then((response) => {
        if (response.status == 200) {
          this.condition = Object.assign({}, response.json());
          this.error = undefined;
        }
      })
      .catch((error)=> {
        this.error = this.setErrorMessage(error.json().statusCode, validValue);
        this.condition = undefined;
      });
    }

    setErrorMessage(statusCode, value){
      let newMessage;
      if(statusCode == 400 || value === undefined) {
        newMessage = "Please enter a city or zip Code"
      } else if (statusCode == 404) {
        newMessage = value + " could not be found. Please enter a different location.";
      } else {
        newMessage = "Invalid data"
      }
      return newMessage;
    }

    validateValue(value) {
      if(value!=undefined){
        return value.trim();
     }
    }

    validateUnit(unit) {
      if(unit==undefined){
        return 'default';
      }
      else{
        return unit;
      }
    }
  }