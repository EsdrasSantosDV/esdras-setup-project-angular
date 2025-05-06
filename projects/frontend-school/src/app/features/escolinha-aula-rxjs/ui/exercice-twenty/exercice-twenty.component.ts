import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, delay, distinctUntilChanged, filter, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-twenty',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './exercice-twenty.component.html',
  styleUrl: './exercice-twenty.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciceTwentyComponent implements OnInit {
  searchControl = new FormControl('');
  resultado = '';

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        filter((valor): valor is string => valor !== null),
        tap((valor) => console.log('🔎 Buscando por:', valor)),
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
