import { Injectable } from '@angular/core';
import { HttpClient } from '@Angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://cors-anywhere.herokuapp.com/https://cartalkio-mock-api.s3.eu-west-2.amazonaws.com/data.json')
      .pipe(
        map((response: LibraryData) => {
          console.log(response);
          return response;
        })
      );
  }

}

export class LibraryData {
  LocationType: string;
  Name: string;
  Description: string;
  Url: string;
  Latitude: string | number;
  Longitude: string | number;
  Town: string;
}
