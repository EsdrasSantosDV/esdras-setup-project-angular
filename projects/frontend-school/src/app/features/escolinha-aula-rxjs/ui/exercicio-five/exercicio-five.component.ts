import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'esdras-khan-exercicio-five',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe, CommonModule],
  templateUrl: './exercicio-five.component.html',
  styleUrl: './exercicio-five.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

/*
  Explicação: 
  - O debounceTime(300) espera 300ms após o último evento de digitação antes de emitir o valor.
  - O distinctUntilChanged() garante que o valor só seja emitido se for diferente do último valor emitido.
  - O tap() é usado para executar um efeito colateral (neste caso, um console.log) sem alterar o fluxo de dados.
  - O valueChanges é um Observable que emite o valor atual do FormControl sempre que ele muda.
  - O valueSearched é um Observable que emite o valor digitado no campo de busca após aplicar os operadores debounceTime e distinctUntilChanged.
*/
export class ExercicioFiveComponent implements OnInit {
  searchControl = new FormControl();
  valueSearched!: Observable<string | null>;

  ngOnInit() {
    this.valueSearched = this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap((value) => console.log('buscando por: ', value)),
    );
  }
}
