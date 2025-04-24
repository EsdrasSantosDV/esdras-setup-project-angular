import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NoopValueAccessorDirective } from '../../directives/noop-value-accessor';

@Component({
  selector: 'ef-exercise-two',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './exercise-two.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [NoopValueAccessorDirective],
})
export class ExerciseTwoComponent {
  formControl = input.required<FormControl>();
}
