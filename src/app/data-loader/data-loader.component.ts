import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-data-loader',
  templateUrl: './data-loader.component.html',
  styleUrls: ['./data-loader.component.css']
})
export class DataLoaderComponent implements OnInit {
  protected message = "";

  @Input()
  public title = "default";

  @Output()
  startLoading = new EventEmitter<{ name: string, interval: number }>();

  constructor() {
  }

  ngOnInit(): void {
  }

  loadData() {
    this.message = this.message === "" ? "data loaded" : "";
    this.startLoading.emit({
      name: 'Button clicked',
      interval: 100
    });
  }
}
