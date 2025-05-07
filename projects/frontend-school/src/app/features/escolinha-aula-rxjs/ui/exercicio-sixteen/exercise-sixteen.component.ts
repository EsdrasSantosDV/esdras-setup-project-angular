import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { delay, fromEvent, mergeMap, of } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-sixteen',
  standalone: true,
  imports: [],
  templateUrl: './exercise-sixteen.component.html',
  styleUrl: './exercise-sixteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioSixteenComponent {
  @ViewChild('btnRequisicao') btnRef!: ElementRef<HTMLButtonElement>;

  ngAfterViewInit(): void {
    fromEvent(this.btnRef.nativeElement, 'click')
      .pipe(
        mergeMap((_, index) => {
          const id = Math.floor(Math.random() * 1000);
          console.log(`⏳ Requisição iniciada (ID: ${id})`);
          return of(`✅ Resposta recebida (ID: ${id})`).pipe(delay(2000));
        }),
      )
      .subscribe((resposta) => {
        console.log(resposta);
      });
  }
}
