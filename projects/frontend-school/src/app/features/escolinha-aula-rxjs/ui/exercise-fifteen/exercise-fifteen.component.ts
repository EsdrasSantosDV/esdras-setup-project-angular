import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { filter, fromEvent, map } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-fifteen',
  standalone: true,
  imports: [],
  templateUrl: './exercise-fifteen.component.html',
  styleUrl: './exercise-fifteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioFifteenComponent implements AfterViewInit {
  @ViewChild('inputTexto') inputRef!: ElementRef<HTMLInputElement>;

  ngAfterViewInit(): void {
    fromEvent<InputEvent>(this.inputRef.nativeElement, 'input')
      .pipe(
        map((event) => (event.target as HTMLInputElement).value.trim()),
        filter((text) => text.toLowerCase().startsWith('a')),
      )
      .subscribe((valor) => {
        console.log('Texto que começa com A:', valor);
      });
  }
}
