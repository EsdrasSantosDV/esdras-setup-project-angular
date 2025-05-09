import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { fromEvent, map, withLatestFrom } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-twelve',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './exercise-twelve.component.html',
  styleUrl: './exercise-twelve.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseTwelveComponent implements AfterViewInit {
  inputControl = new FormControl('');

  @ViewChild('logButton', { static: true }) logButton!: ElementRef;

  ngAfterViewInit(): void {
    fromEvent(this.logButton.nativeElement, 'click')
      .pipe(
        withLatestFrom(this.inputControl.valueChanges),
        map(([_, value]) => value),
      )
      .subscribe((latestValue) => {
        console.log('Valor atual do input:', latestValue);
      });
  }
}
