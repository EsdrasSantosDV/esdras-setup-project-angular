import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { delay, exhaustMap, fromEvent, of } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-nineteen',
  standalone: true,
  imports: [],
  templateUrl: './exercicio-nineteen.component.html',
  styleUrl: './exercicio-nineteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioNineteenComponent implements AfterViewInit {
  @ViewChild('btnEntrar') btnRef!: ElementRef<HTMLButtonElement>;

  ngAfterViewInit(): void {
    fromEvent(this.btnRef.nativeElement, 'click')
      .pipe(
        exhaustMap(() => {
          console.log('🔐 Iniciando login...');
          return of('✅ Login realizado com sucesso!').pipe(delay(3000));
        }),
      )
      .subscribe((mensagem) => {
        console.log(mensagem);
      });
  }
}
