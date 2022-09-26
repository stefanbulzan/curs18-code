import {Component, OnInit} from '@angular/core';
import {Invoice} from "../model/invoice";
import {InvoiceService} from "../services/invoice.service";

@Component({
  selector: 'app-invoice-table',
  templateUrl: './invoice-table.component.html',
  styleUrls: ['./invoice-table.component.css']
})
export class InvoiceTableComponent implements OnInit {
  displayedColumns: string[] = ['description', "amount", 'sender', "receiver", 'payed'];
  dataSource: Invoice[] = [];

  constructor(private invoiceService: InvoiceService) {
    invoiceService.getInvoices()
      .subscribe(result => this.dataSource = result);
  }

  ngOnInit(): void {
  }

}
