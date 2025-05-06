import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, fromEvent, throttleTime } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-ten',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './exercicio-ten.component.html',
  styleUrl: './exercicio-ten.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

// Implemente um campo de busca ou um botão e use o operador fromEvent para capturar os eventos.
// Em seguida, teste ambos os operadores debounceTime e throttleTime e observe como o comportamento de emissão de eventos muda com cada um.
export class ExercicioTenComponent implements AfterViewInit {
  formGroup = new FormGroup({
    search: new FormControl(''),
  });
  @ViewChild('searchInput') searchInput!: ElementRef;
  @ViewChild('btnSearch') btnSearch!: ElementRef;

  ngAfterViewInit() {
    fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(debounceTime(500))
      .subscribe((event) => {
        const inputElement = (event as Event).target as HTMLInputElement;
        console.log('Valor com debounce:', inputElement.value);
      });

    fromEvent(this.btnSearch.nativeElement, 'click')
      .pipe(throttleTime(1000))
      .subscribe(() => {
        console.log('Botão clicado com throttle!');
      });
  }
}
