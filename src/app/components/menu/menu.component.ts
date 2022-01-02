import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { DropdownPanel } from 'src/app/directives/dropdown.directive';
import { Theme, LocalStorageState } from 'src/app/models/localstorage';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements DropdownPanel {
  @ViewChild(TemplateRef) templateRef: TemplateRef<any>;
  @Output() closed = new EventEmitter<string | null>();

  public theme: Theme = 'light-theme';
  public $state: Observable<LocalStorageState> = this.state.$state;

  constructor(
    private state: StateService
  ) { }

  public close($event: MouseEvent): void {
    // this.closed.emit(null);
  }

}
