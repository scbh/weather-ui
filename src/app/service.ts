import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class Service {
    constructor(private http:Http) {}

    getWeatherInformation(url, type, unit) {
        
        if(unit){
            url=url+"?value="+type+"&unit="+unit;
        }
        else{
            url=url+"?value="+type;
        }
        
        return this.http.get(url).toPromise();
    }
}