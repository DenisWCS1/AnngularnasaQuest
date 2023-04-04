import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { NasaData } from './models/nasa.model';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  constructor(public http: HttpClient) {}
  getImageOfTheDay(): Observable<NasaData> {
    const url =
      'https://api.nasa.gov/planetary/apod?api_key=kXj8xdwAqAtTQAePmIlodyLEEINZDgx3N9BjROpL';
    return this.http.get<NasaData>(url);
  }
}
