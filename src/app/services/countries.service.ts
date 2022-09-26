import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor() {
  }

  getAll() {
    return ["Hungary", "Croatia", "Romania"];
  }
}
