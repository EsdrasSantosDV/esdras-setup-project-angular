import { AsyncPipe } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { BehaviorSubject, debounceTime, fromEvent, map, Subscription, tap, throttleTime } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-ten',
  standalone: true,
  imports: [AsyncPipe],
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
  
  - O AsyncPipe não funciona para os fromEvent, então tive que me inscrever neles da maneira convencional.
  Isso ocorre porque o fromEvent é infinito, ele não se completa, então o AsyncPipe não pode lidar com isso.
  
  - Usei constantes para armazenar as assinaturas e um Subscription para elas, depois desincrevo de tudo no NgOnDestroy.
*/
export class ExercicioTenComponent implements AfterViewInit, OnDestroy {
  @ViewChild('debounceButton') debounceButton!: ElementRef;
  @ViewChild('throttleButton') throttleButton!: ElementRef;

  debounce$ = new BehaviorSubject<string>('');
  throttle$ = new BehaviorSubject<string>('');
  private subscriptions = new Subscription();

  ngAfterViewInit(): void {
    const debounceSubscription = fromEvent(this.debounceButton.nativeElement, 'click')
      .pipe(
        map(() => 'Debounce button clicked'),
        debounceTime(1000),
        tap((value) => {
          this.debounce$.next(value);
          console.log('Ex10 - DebounceTime - clique registrado:', value);
        }),
      )
      .subscribe();

    const throttleSubscription = fromEvent(this.throttleButton.nativeElement, 'click')
      .pipe(
        map(() => 'Throttle button clicked'),
        throttleTime(2000),
        tap((value) => {
          this.throttle$.next(value);
          console.log('Ex10 - ThrottleTime - clique registrado:', value);
        }),
      )
      .subscribe();

    // Adiciona as assinaturas ao gerenciador
    this.subscriptions.add(debounceSubscription);
    this.subscriptions.add(throttleSubscription);
  }

  ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
}
