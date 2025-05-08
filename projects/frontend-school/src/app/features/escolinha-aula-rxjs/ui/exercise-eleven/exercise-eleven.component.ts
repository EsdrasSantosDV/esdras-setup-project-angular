import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { Observable, of, debounceTime, switchMap, map } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-eleven',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './exercise-eleven.component.html',
  styleUrl: './exercise-eleven.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseElevenComponent {
  formBuilder = inject(FormBuilder);

  names = ['leonardo', 'Mario', 'Malu', 'Esdras'];

  form = this.formBuilder.group({
    name: ['', [], [this.usernameAsyncValidator.bind(this)]],
  });

  usernameAsyncValidator(control: AbstractControl): Observable<ValidationErrors | null> {
    return of(control.value).pipe(
      debounceTime(300),
      switchMap((value) =>
        of(this.names.includes(value)).pipe(map((isTaken) => (isTaken ? { usernameTaken: true } : null))),
      ),
    );
  }
}
