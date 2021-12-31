import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IInvoice } from '../models/invoice';
import { data } from '../../assets/data';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  public $invoices: BehaviorSubject<IInvoice[]> = new BehaviorSubject<IInvoice[]>([]);

  constructor() {
    this.loadMockData();
  }

  private loadMockData(): void {
    this.$invoices.next(data);
  }
}
