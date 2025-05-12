import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { debounceTime, fromEvent, Observable, tap, throttleTime } from 'rxjs';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';

@Component({
  selector: 'esdras-khan-exercicio-ten',
  standalone: true,
  imports: [AsyncPipe, PrimaryButtonComponent],
  templateUrl: './exercicio-ten.component.html',
  styleUrls: ['./exercicio-ten.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

/* 
  Explicação: 
  - O código utiliza RxJS para criar dois botões que demonstram o uso de debounce e throttle.

  - O botão de debounce registra cliques com um atraso de 1 segundo, enquanto o botão de throttle registra cliques a cada 2 segundos.

  - Tive que usar o ngAfterViewInit para garantir que os elementos do DOM estejam disponíveis antes de adicionar os ouvintes de eventos,
  o NgOnInit ocorre antes disso, então não funcionaria.

  - O AsyncPipe é usado para assinar os BehaviorSubjects e atualizar a interface do usuário com os cliques registrados.
  
  - O AsyncPipe não inscreve porque o ngAfterViewInit não renderiza o template novamente, usei o static para conseguir usar o ngoninit.
  
  - Usei constantes para armazenar as assinaturas e um Subscription para elas, depois desincrevo de tudo no NgOnDestroy.
*/
export class ExercicioTenComponent implements OnInit {
  @ViewChild('debounceButton', { static: true }) debounceButton!: ElementRef;
  @ViewChild('throttleButton', { static: true }) throttleButton!: ElementRef;

  debounce$!: Observable<unknown>;
  throttle$!: Observable<unknown>;

  ngOnInit(): void {
    this.debounce$ = fromEvent(this.debounceButton.nativeElement, 'click').pipe(
      debounceTime(1000),
      tap(() => console.log('Ex10 - DebounceTime - clique registrado')),
    );

    this.throttle$ = fromEvent(this.throttleButton.nativeElement, 'click').pipe(
      throttleTime(2000),
      tap(() => console.log('Ex10 - ThrottleTime - clique registrado')),
    );
  }
}
