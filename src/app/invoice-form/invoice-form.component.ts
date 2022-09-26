import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {InvoiceService} from "../services/invoice.service";
import {Invoice} from "../model/invoice";

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent implements OnInit {
  addInvoiceForm = this.fb.group({
    description: ['', Validators.required],
    amount: [0, Validators.required],
    receiver: ['']
  });

  constructor(public dialogRef: MatDialogRef<InvoiceFormComponent>,
              private snackBar: MatSnackBar,
              private invoiceService: InvoiceService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  doSubmit() {
    this.snackBar.open(JSON.stringify(this.addInvoiceForm.value));
    if (this.addInvoiceForm.valid) {
      console.log(this.addInvoiceForm.value['description']);
      let invoice: Invoice = {
        description: '' + this.addInvoiceForm.value['description'],
        amount: 11,
        receiver: '' + this.addInvoiceForm.value['receiver'],
      };
      this.invoiceService.addInvoice(invoice);
    } else {
      this.snackBar.open("Please fill all required fields");
    }
  }
}
