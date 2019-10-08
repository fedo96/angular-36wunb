import { Component } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  lat: string = '';
  lng: string = '';

  location = Object;

  constructor(private map : MapService){}

  ngOnInit(){
    this.map.getLocation().subscribe(data=> {
      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;
    })
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/