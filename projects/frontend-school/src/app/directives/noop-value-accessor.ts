import { Directive } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NoopValueAccessorDirective,
    },
  ],
})
export class NoopValueAccessorDirective implements ControlValueAccessor {
  onChange = () => {};
  onTouched = () => {};

  writeValue(): void {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState() {}
}
