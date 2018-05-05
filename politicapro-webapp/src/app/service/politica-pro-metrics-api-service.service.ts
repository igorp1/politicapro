import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import {environment} from '../../environments/environment';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class PoliticaProMetricsApiService {

  constructor(private http : Http) { }

  API_base : String = environment.API_base;

  fetchAllTimeCounts(){
    return this.http.get(`${this.API_base}/twitter/count/alltime`)
    .map( (res:Response) => res.json() )
  }

}
