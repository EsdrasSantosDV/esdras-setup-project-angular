import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { debounceTime, fromEvent, throttleTime } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-ten',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './exercicio-ten.component.html',
  styleUrl: './exercicio-ten.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioTenComponent implements AfterViewInit {
  @ViewChild('searchInput') searchInput!: ElementRef;
  @ViewChild('throttledButton') throttledButton!: ElementRef;

  inputValue = '';

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(debounceTime(500))
      .subscribe((event: any) => {
        //FAZ A LOGICA DE EFEITO COLATERAL SEMPRE NO PIPE, TANTO TRANSFORMAÇÃO COMO EFEITO COLATERAL
        const value = (event.target as HTMLInputElement).value;
        this.inputValue = value;
        this.cdr.detectChanges();
        //NAO USE DETECT CHANGES, VC TA INFERINDO ISSO PRO ANGULAR QUE O VALOR FOI ALTERADO, MAS NAO É NECESSARIO,
        // O FRAMEWORK JA FAZ ISSO PRA VOCE, INFERIR ISSO E IR CONTRA A DETECAO AUTOMATICA DELE

        console.log('Busca com debounce:', value);
      });

    //FAZ A LOGICA DE EFEITO COLATERAL SEMPRE NO PIPE, TANTO TRANSFORMAÇÃO COMO EFEITO COLATERAL
    fromEvent(this.throttledButton.nativeElement, 'click')
      .pipe(throttleTime(3000))
      .subscribe(() => {
        console.log('Clique com throttle');
      });
  }
}

/*
 Excelente!
 mas voce poderia ter feito o subscribe no template, e nao no ts.
  
*/
