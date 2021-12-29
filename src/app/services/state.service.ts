import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DefaultState, LocalStorageState, Theme } from '../models/localstorage';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private state: LocalStorageState = DefaultState;

  public $state: BehaviorSubject<LocalStorageState> = new BehaviorSubject<LocalStorageState>(this.state);

  constructor() {
    this.loadState();
  }

  public toggleTheme(theme: Theme): void {
    this.state.theme = theme;
    localStorage.setItem('theme', theme);
    this.$state.next(this.state);
  }

  private loadState(): void {
    const theme: Theme = localStorage.getItem('theme') as Theme;
    this.state.theme = theme;
    this.$state.next(this.state);
  }
}
