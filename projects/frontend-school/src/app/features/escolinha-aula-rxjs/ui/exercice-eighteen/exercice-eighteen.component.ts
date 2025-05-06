import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, delay, distinctUntilChanged, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-eighteen',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './exercice-eighteen.component.html',
  styleUrl: './exercice-eighteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciceEighteenComponent implements OnInit {
  searchControl = new FormControl('');
  resultado = '';

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        distinctUntilChanged(),
        tap((valor) => console.log('🔎 Buscando por:', valor)),
        switchMap((termo) => (termo ? this.simularBusca(termo) : of(''))),
        switchMap((termo: string) => this.simularBusca(termo)),
      )
      .subscribe((res) => {
        this.resultado = res;
        console.log('✅ Resultado:', res);
      });
  }

  simularBusca(termo: string) {
    const tempo = Math.floor(Math.random() * 2000) + 500;
    return of(`Resultado da busca por "${termo}" em ${tempo}ms`).pipe(delay(tempo));
  }
}
