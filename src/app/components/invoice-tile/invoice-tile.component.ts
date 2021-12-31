import { Component, Input, OnInit } from '@angular/core';
import { IInvoice } from 'src/app/models/invoice';
import { Theme } from 'src/app/models/localstorage';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-invoice-tile',
  templateUrl: './invoice-tile.component.html',
  styleUrls: ['./invoice-tile.component.scss']
})
export class InvoiceTileComponent implements OnInit {
  @Input() invoice: IInvoice;
  public theme: Theme = 'light-theme';

  constructor(
    private state: StateService
  ) { }

  ngOnInit(): void {
    this.state.$state.subscribe(state => {
      this.theme = state.theme;
    });
  }

}
