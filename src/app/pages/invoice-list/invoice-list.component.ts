import { Component, OnInit } from '@angular/core';
import { IInvoice } from 'src/app/models/invoice';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
  public invoices: IInvoice[] = [];

  constructor(
    private invoiceService: InvoiceService
  ) { }

  ngOnInit(): void {
    this.invoiceService.$invoices.subscribe(invoices => {
      this.invoices = invoices;

    });
  }

}
