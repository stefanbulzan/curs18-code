import {Component, OnInit} from '@angular/core';
import {InvoiceService} from "../services/invoice.service";
import {Observable} from "rxjs";
import {Invoice} from "../model/invoice";

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {
  invoices$!: Observable<Invoice[]>;

  constructor(private invoiceService: InvoiceService) {
  }

  ngOnInit(): void {
    this.invoices$ = this.invoiceService.getInvoices();
  }

}
