import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, map, throttleTime } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-ten',
  standalone: true,
  imports: [],
  templateUrl: './exercicio-ten.component.html',
  styleUrl: './exercicio-ten.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioTenComponent implements AfterViewInit {
  @ViewChild('debounceInput', { static: true }) debounceInput!: ElementRef;
  @ViewChild('throttleInput', { static: true }) throttleInput!: ElementRef;

  ngAfterViewInit(): void {
    fromEvent(this.debounceInput.nativeElement, 'input')
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(500),
      )
      .subscribe((value) => console.log('[debounceTime] =>', value));

    fromEvent(this.throttleInput.nativeElement, 'input')
      .pipe(
        map((event: any) => event.target.value),
        throttleTime(500),
      )
      .subscribe((value) => console.log('[throttleTime] =>', value));
  }
}
