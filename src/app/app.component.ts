import { Component, OnInit } from '@angular/core';
import { Theme } from './models/localstorage';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public theme: Theme = 'light-theme';
  public drawerOpen: boolean = false;

  constructor(private state: StateService) {}

  ngOnInit(): void {
    this.state.$state.subscribe(state => {
      this.theme = state.theme;
      this.drawerOpen = state.drawerOpen;
    });
  }

}
