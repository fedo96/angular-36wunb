import { Injectable } from '@angular/core';
import { HttpClient } from '@Angular/common/http';
import {localeEnGb} from '@angular/common/locales/en-GB';


interface Location{
  latitude: String;
  longitude: String;
}

@Injectable({
  providedIn: 'root'
})

export class MapService {

  constructor(private http: HttpClient) { }

  getLocation(){
    return this.http.get<Location>('http://api.ipapi.com/api/check?access_key=0f8eb68dafbc44327e8fe28d10a5dba6')
  }

}