import { Component, Input, OnInit } from '@angular/core';
import { Theme } from 'src/app/models/localstorage';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
  public open: boolean = false;
  public theme: Theme = 'light-theme';

  constructor(private state: StateService) { }

  ngOnInit(): void {
    this.state.$state.subscribe(state => {
      this.open = state.drawerOpen;
      this.theme = state.theme;
    });
  }

  public close(): void {
    this.state.toggleDrawer();
  }
}
