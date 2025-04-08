import { ChangeDetectionStrategy, Component, inject, Injector, OnInit } from '@angular/core';
import { NoopValueAccessorDirective } from '../../directives/noop-value-accessor';
import {
  ControlContainer,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroup,
  NgControl,
  NgModel,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'ef-exercise-one',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './exercise-one.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [NoopValueAccessorDirective],
})
export class ExerciseOneComponent implements OnInit {
  control: FormControl = new FormControl();

  private injector = inject(Injector);

  ngOnInit() {
    const ngControl = this.injector.get(NgControl, null, { self: true, optional: true });

    if (ngControl instanceof NgModel) {
      this.control = ngControl.control;
    } else if (ngControl instanceof FormControlDirective) {
      this.control = ngControl.control;
    } else if (ngControl instanceof FormControlName) {
      const container = this.injector.get(ControlContainer).control as FormGroup;
      this.control = container.controls[ngControl.name!] as FormControl;
    }
  }

  registerOnChange(fn: any): void {}

  registerOnTouched(fn: any): void {}

  writeValue(obj: any): void {}
}
