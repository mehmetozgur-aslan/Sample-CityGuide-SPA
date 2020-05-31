import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from '../models/city';
import { Photo } from '../models/photo';
import { AlertifyService } from './alertify.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor(
    private httpClient: HttpClient,
    private alertifyService: AlertifyService,
    private router: Router
  ) {}
  path: 'http://localhost:58822/api/';

  getCities(): Observable<City[]> {
    console.log(this.path)
    return this.httpClient.get<City[]>('http://localhost:58822/api/' + 'cities');
  }

  getCityById(cityId: number): Observable<City> {
    return this.httpClient.get<City>('http://localhost:58822/api/' + 'cities/detail/?id=' + cityId);
  }

  getPhotosByCity(cityId: number): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(
      'http://localhost:58822/api/' + 'cities/photos/?cityId=' + cityId
    );
  }

  add(city: City) {
    this.httpClient.post<City>('http://localhost:58822/api/' + 'cities/add', city).subscribe((data) => {
      this.alertifyService.success('Şehir başarıyla eklendi');
      this.router.navigateByUrl('/cityDetail/' + data["id"]);
    });
  }
}
