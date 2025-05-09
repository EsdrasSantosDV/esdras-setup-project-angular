import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-twelve',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './exercise-twelve.component.html',
  styleUrl: './exercise-twelve.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseTwelveComponent implements AfterViewInit {
  @ViewChild('btnSearch') btnSearch!: ElementRef;

  formGroup = new FormGroup({
    search: new FormControl(''),
  });

  ngAfterViewInit() {
    fromEvent(this.btnSearch.nativeElement, 'click').subscribe(() => {
      const inputValue = this.formGroup.get('search')?.value;
      console.log('Valor do campo de texto:', inputValue);
    });
  }
}
