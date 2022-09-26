import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {InvoiceFormComponent} from "../../invoice-form/invoice-form.component";

@Component({
  selector: 'app-invoice-page',
  templateUrl: './invoice-page.component.html',
  styleUrls: ['./invoice-page.component.css']
})
export class InvoicePageComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openAddInvoice() {
    const dialogRef = this.dialog.open(InvoiceFormComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed with result ' + result);
    });
  }

}

