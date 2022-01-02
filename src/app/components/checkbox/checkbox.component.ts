import { Component, ElementRef, forwardRef, Input, OnInit, Renderer2 } from '@angular/core';
import { CheckboxControlValueAccessor, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
import { LocalStorageState } from 'src/app/models/localstorage';
import { StateService } from 'src/app/services/state.service';

const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxComponent),
  multi: true,
};

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class CheckboxComponent extends CheckboxControlValueAccessor {
  public disabled: boolean;
  public $state: Observable<LocalStorageState>;

  @Input() id: string;
  @Input() checked: boolean;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private state: StateService
  ) {
    super(renderer, elementRef);
    this.$state = state.$state;
  }

  onChange: (_: any) => void;
  onTouched: () => void;

  public toggleCheck(): void {
    this.checked = !this.checked;
    this.onChange(this.checked);
    this.onTouched();
  }

  writeValue(obj: any): void {
    this.checked = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
