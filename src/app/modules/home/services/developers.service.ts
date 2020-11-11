import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DevelopersService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getDeveloper(): Observable<Developers> {
    return this.httpClient.get<Developers>('https://chuson-b.herokuapp.com/api/v1/auth/devs');
  }
}

interface Developers {
  name: string;
  description: string;
  photo: string;
}