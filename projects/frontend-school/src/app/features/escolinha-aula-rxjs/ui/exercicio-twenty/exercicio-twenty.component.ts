import { debounceTime, map } from 'rxjs/operators';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { delay, fromEvent, of, switchMap } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-twenty',
  standalone: true,
  imports: [],
  templateUrl: './exercicio-twenty.component.html',
  styleUrl: './exercicio-twenty.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioTwentyComponent implements AfterViewInit {
  @ViewChild('inputBusca') inputRef!: ElementRef<HTMLInputElement>;

  ngAfterViewInit(): void {
    fromEvent<InputEvent>(this.inputRef.nativeElement, 'input')
      .pipe(
        debounceTime(500),
        map((event) => (event.target as HTMLInputElement).value),
        switchMap((busca) => {
          console.log('🔍 Buscando por:', busca);
          return this.simularRequisicao(busca);
        }),
      )
      .subscribe((resposta) => {
        console.log('✅ Resultado:', resposta);
      });
  }

  private simularRequisicao(termo: string) {
    return of(`Resultado para "${termo}"`).pipe(delay(1500)); // simula tempo de resposta
  }
}
