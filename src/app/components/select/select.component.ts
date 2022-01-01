import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { DropdownPanel } from 'src/app/directives/dropdown.directive';
import { LocalStorageState, Theme } from 'src/app/models/localstorage';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements DropdownPanel {
  @ViewChild(TemplateRef) templateRef: TemplateRef<any>;
  @Output() closed = new EventEmitter<string>();

  @Input() selectForm: FormGroup;
  @Input() selectControlName: string;

  public theme: Theme = 'light-theme';
  public $state: Observable<LocalStorageState> = this.state.$state;

  constructor(
    private state: StateService
  ) { }

  public close($event: MouseEvent): void {
    if (this.selectForm) {
      this.selectForm.get(this.selectControlName)?.setValue(($event.target as HTMLInputElement).value);
    }

    this.closed.emit(($event.target as HTMLInputElement)?.value);
  }
}
