import { Component, OnInit, Renderer2 } from '@angular/core';
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

  constructor(
    private state: StateService,
    private renderer: Renderer2) {}

  ngOnInit(): void {
    this.state.$state.subscribe(state => {
      this.renderer.removeClass(document.body, this.theme);

      this.theme = state.theme;
      this.drawerOpen = state.drawerOpen;

      this.renderer.addClass(document.body, this.theme);
    });
  }

}
