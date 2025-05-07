import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, delay, fromEvent, map, of, switchMap } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-eighteen',
  standalone: true,
  imports: [],
  templateUrl: './exercicio-eighteen.component.html',
  styleUrl: './exercicio-eighteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioEighteenComponent implements AfterViewInit {
  @ViewChild('campoBusca') inputRef!: ElementRef<HTMLInputElement>;

  ngAfterViewInit(): void {
    fromEvent<InputEvent>(this.inputRef.nativeElement, 'input')
      .pipe(
        debounceTime(400),
        map((event) => (event.target as HTMLInputElement).value),
        switchMap((termo) => {
          console.log(`🔎 Buscando por: ${termo}`);
          return of(`Resultado para: "${termo}"`).pipe(delay(1000));
        }),
      )
      .subscribe((resultado) => {
        console.log(`✅ ${resultado}`);
      });
  }
}
