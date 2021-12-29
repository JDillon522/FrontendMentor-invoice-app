import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Theme } from 'src/app/models/localstorage';
import { StateService } from 'src/app/services/state.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public currentTheme: Theme = 'light-theme';

  constructor(private state: StateService) { }

  ngOnInit(): void {
    this.state.$state.subscribe(state => {
      this.currentTheme = state.theme;
    });
  }

  public toggle(theme: Theme): void {
    this.state.toggleTheme(theme);
  }
}
