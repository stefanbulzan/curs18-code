import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {
  url: any;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
    activatedRoute.url.subscribe(value => this.url = value);
    // this.url = this.router.url;
    router.events.subscribe(event => console.log(event));
  }

  ngOnInit(): void {
  }

  goHome() {
    this.router.navigateByUrl("/first");
  }
}
