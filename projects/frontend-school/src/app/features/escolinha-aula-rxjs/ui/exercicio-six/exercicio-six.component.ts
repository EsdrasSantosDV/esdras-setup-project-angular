import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Observable, tap } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-six',
  standalone: true,
  imports: [AsyncPipe, ReactiveFormsModule, CommonModule],
  templateUrl: './exercicio-six.component.html',
  styleUrl: './exercicio-six.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

/*
  Explicação: 
  - O debounceTime(1000) espera 1000ms após o último evento de digitação antes de emitir o valor, coloquei um valor maior
    para testar o distinctUntilChanged().
  - O distinctUntilChanged() garante que o valor só seja emitido se for diferente do último valor emitido.
  - O tap() é usado para executar um efeito colateral (neste caso, um console.log) sem alterar o fluxo de dados.
  - O valueChanges é um Observable que emite o valor atual do FormControl sempre que ele muda.
  - O valueSearched é um Observable que emite o valor digitado no campo de busca após aplicar os operadores debounceTime e distinctUntilChanged.
*/
export class ExercicioSixComponent implements OnInit {
  searchControl = new FormControl();
  valueSearched!: Observable<string | null>;

  ngOnInit() {
    this.valueSearched = this.searchControl.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      tap((value) => console.log(`buscando por: ${value}`)),
    );
  }
}
