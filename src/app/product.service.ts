import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  private _http: Http;
  private _albumUrl = '../assets/album.json';
  constructor() { }

  public getAlbum(id: number): Observable<Response> {
    return this._http.get(this._albumUrl)
    .map(response => response.json());
  }
}
