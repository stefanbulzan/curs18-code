import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curs17-code';
  message = "";
  object = {
    name: "Adrian",
    city: "Oradea"
  };
  amount = 100;
  birthday=new Date();

  startLoadingData() {
    this.message = "Parent start loading";
  }
}
