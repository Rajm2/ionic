import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Item } from '../../models/item';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {Jsonp} from '@angular/http';

/*
  Generated class for the ItemProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ItemProvider {

  constructor(public http: Http, private _jsonp: Jsonp) {
    console.log('Hello ItemProvider Provider');
  }

  getItems() : Observable<any> {
    return this.http.get("http://localhost/test/index.php").map(response => response.json());
  }

}
