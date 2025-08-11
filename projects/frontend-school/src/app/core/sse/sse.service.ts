import { Injectable, NgZone } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/operators';

export interface GenericEnvelope<T = unknown> {
  channel: string;
  type: string;
  data: T;
  eventId: string;
  occurredAt: string;
  schemaVersion: 1;
}

@Injectable({ providedIn: 'root' })
export class SseService {
  private es?: EventSource;
  private readonly inbound$ = new Subject<GenericEnvelope>();
  readonly connected$ = new Subject<boolean>();

  readonly stream$: Observable<GenericEnvelope> = this.inbound$
    .asObservable()
    .pipe(shareReplay({ bufferSize: 0, refCount: true }));

  readonly connection$: Observable<boolean> = this.connected$.asObservable();

  constructor(private readonly zone: NgZone) {}

  connect(): void {
    if (this.es) return;

    const url = `http://localhost:3000/events/stream`;

    this.zone.runOutsideAngular(() => {
      const es = new EventSource(url);
      this.es = es;

      es.onopen = () => {
        this.zone.run(() => this.connected$.next(true));
      };

      es.addEventListener('app-event', (evt: MessageEvent) => {
        try {
          const payload = JSON.parse(evt.data) as GenericEnvelope;
          this.zone.run(() => this.inbound$.next(payload));
        } catch (err) {
          console.error('[SSE] Erro ao parsear evento', err);
        }
      });

      es.onerror = () => {
        this.zone.run(() => this.connected$.next(false));
      };
    });
  }

  disconnect(): void {
    if (!this.es) return;
    this.es.close();
    this.es = undefined;
    this.connected$.next(false);
  }

  on<TPayload>(channel: string, type: string): Observable<TPayload> {
    return this.stream$.pipe(
      filter((e) => e.channel === channel && e.type === type),
      map((e) => e.data as TPayload),
    );
  }

  onById<TPayload extends Record<string, unknown>, TId extends string>(
    channel: string,
    type: string,
    idKey: keyof TPayload & string,
    id: TId,
  ): Observable<TPayload> {
    return this.on<TPayload>(channel, type).pipe(filter((payload) => (payload as TPayload)?.[idKey] === id));
  }
}
