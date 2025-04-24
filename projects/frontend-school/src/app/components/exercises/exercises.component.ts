import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { ExerciseTwoComponent } from '../exercise-two/exercise-two.component';
import { ExerciseOneComponent } from '../exercise-one/exercise-one.component';

@Component({
  selector: 'ef-exercises',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, FormsModule, ExerciseTwoComponent, ExerciseOneComponent],
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercisesComponent {
  reactiveFormExerciseOne = new FormGroup({
    name: new FormControl(''),
  });

  reactiveFormExerciseTwo = new FormGroup({
    input: new FormControl(''),
  });
}
