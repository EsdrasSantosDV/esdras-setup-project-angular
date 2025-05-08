import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { debounceTime, fromEvent, tap, throttleTime } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-ten',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-ten.component.html',
  styleUrl: './exercicio-ten.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioTenComponent implements AfterViewInit {
  @ViewChild('button', { read: ElementRef })
  button!: ElementRef;

  ngAfterViewInit() {
    fromEvent(this.button.nativeElement, 'click')
      .pipe(
        // debounceTime(1000),
        throttleTime(1000),
        tap(() => console.log('Exercicio 10 - Clicou')),
      )
      .subscribe();
  }
}
