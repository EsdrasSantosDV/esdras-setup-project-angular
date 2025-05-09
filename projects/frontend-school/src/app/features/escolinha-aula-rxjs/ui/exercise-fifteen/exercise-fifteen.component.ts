import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-fifteen',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './exercise-fifteen.component.html',
  styleUrl: './exercise-fifteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseFifteenComponent implements OnInit {
  wordControl = new FormControl('');

  ngOnInit(): void {
    this.wordControl.valueChanges
      .pipe(filter((text): text is string => !!text && text[0].toLowerCase() === 'a'))
      .subscribe((validWord) => {
        console.log('Palavra começa com A:', validWord);
      });
  }
}
