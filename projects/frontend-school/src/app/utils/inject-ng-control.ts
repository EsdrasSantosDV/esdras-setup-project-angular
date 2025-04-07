import { FormControlDirective, FormControlName, NgControl, NgModel } from '@angular/forms';
import { inject } from '@angular/core';

export function injectNgControl() {
  const ngControl = inject(NgControl, { self: true, optional: true });

  if (!ngControl)
    throw new Error(
      'NgControl not found. Ensure the component is used with [formControl] or formControlName in a reactive form context.',
    );

  if (
    ngControl instanceof FormControlDirective ||
    ngControl instanceof FormControlName ||
    ngControl instanceof NgModel
  ) {
    return ngControl;
  }

  throw new Error('NgControl has a invalid type.');
}
