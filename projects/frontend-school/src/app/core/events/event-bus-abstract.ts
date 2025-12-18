import { InjectionToken } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

interface EventEnvelope<E> {
  type: keyof E;
  payload: unknown;
}

export class EventDispatcherAbstract<Events extends { [key in keyof Events]: unknown }> {
  private readonly _event$ = new ReplaySubject<EventEnvelope<Events>>(1);
  private readonly interceptors: Array<(event: EventEnvelope<Events>) => EventEnvelope<Events> | null> = [];

  emit<K extends keyof Events>(type: K, ...payload: Events[K] extends void ? [] : [Events[K]]) {
    let event: EventEnvelope<Events> = { type, payload: payload[0] };

    for (const interceptor of this.interceptors) {
      const result = interceptor(event);
      if (result === null) return;
      event = result;
    }

    this._event$.next(event);
  }

  on<K extends keyof Events>(type: K): Observable<Events[K]> {
    return this._event$.pipe(
      filter((event) => event.type === type),
      map((event) => event.payload as Events[K]),
    );
  }

  once<K extends keyof Events>(type: K): Observable<Events[K]> {
    return this.on(type).pipe(take(1));
  }

  addInterceptor(interceptor: (event: EventEnvelope<Events>) => EventEnvelope<Events> | null) {
    this.interceptors.push(interceptor);
  }
}

export function provideEventDispatcher<E>(token: InjectionToken<EventDispatcherAbstract<E>>) {
  return {
    provide: token,
    useFactory: () => new EventDispatcherAbstract<E>(),
  };
}
