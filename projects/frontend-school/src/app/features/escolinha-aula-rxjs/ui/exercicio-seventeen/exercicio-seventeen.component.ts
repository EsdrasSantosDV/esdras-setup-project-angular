import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { concatMap, delay, fromEvent, of } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-seventeen',
  standalone: true,
  imports: [],
  templateUrl: './exercicio-seventeen.component.html',
  styleUrl: './exercicio-seventeen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioSeventeenComponent implements AfterViewInit {
  @ViewChild('btnRequisicao') btnRef!: ElementRef<HTMLButtonElement>;

  ngAfterViewInit(): void {
    fromEvent(this.btnRef.nativeElement, 'click')
      .pipe(
        concatMap(() => {
          const id = Math.floor(Math.random() * 1000);
          console.log(`⏳ Iniciando requisição (ID: ${id})`);
          return of(`✅ Requisição concluída (ID: ${id})`).pipe(delay(2000));
        }),
      )
      .subscribe((resposta) => {
        console.log(resposta);
      });
  }
}
