import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IInvoice } from 'src/app/models/invoice';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
  public invoices: IInvoice[] = [];
  public filteredInvoices: IInvoice[] = [];
  public filterForm = new FormGroup({
    draft: new FormControl(),
    pending: new FormControl(),
    paid: new FormControl()
  });

  get filter(): string {
    return this.filteredInvoices.length === this.invoices.length ? 'total' : 'filtered';
  }

  constructor(
    private invoiceService: InvoiceService
  ) { }

  ngOnInit(): void {
    this.invoiceService.$invoices.subscribe(invoices => {
      this.invoices = invoices;
      this.filterInvoices();
    });
    this.filterForm.valueChanges.subscribe(() => {
      this.filterInvoices();
    });
  }

  private filterInvoices(): void {
    const filter = this.filterForm.getRawValue();
    this.filteredInvoices = this.invoices.filter(invoice => {
      if (invoice.status === 'paid' && filter.paid) {
        return true;
      }
      if (invoice.status === 'draft' && filter.draft) {
        return true;
      }
      if (invoice.status === 'pending' && filter.pending) {
        return true;
      }
      if (!filter.pending && !filter.draft && !filter.paid) {
        return true;
      }
      return false;
    });
  }
}
