import {Component, OnInit} from '@angular/core';
import {CountriesService} from "../services/countries.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  public publicString = "publicString";
  protected protectedString = "protectedString";
  private privateString = "privateString";

  notification = new Observable<Date>(observer => {
    setInterval(() => observer.next(new Date()), 1000);
  });

  constructor(protected countries: CountriesService) {
  }

  ngOnInit(): void {
  }

  directMethod() {
    return "Direct call";
  }
}
