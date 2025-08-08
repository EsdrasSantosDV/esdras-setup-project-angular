import { Injectable } from '@angular/core';
import { Observable, Subject, startWith } from 'rxjs';

export type ServerMetrics = { cpuLoad1m: number; rssMB: number; heapMB: number; ts: string };

@Injectable({ providedIn: 'root' })
export class MetricsService {
  private API = 'http://localhost:3000';
  private sse?: EventSource;

  private metricsSub = new Subject<ServerMetrics>();
  public metrics$ = this.metricsSub.asObservable().pipe(startWith({ cpuLoad1m: 0, rssMB: 0, heapMB: 0, ts: '' }));

  start(): void {
    if (this.sse) return;
    this.sse = new EventSource(`${this.API}/stream`);

    this.sse.addEventListener('message', (e: MessageEvent) => {
      if (typeof e.data === 'string' && e.data.startsWith(':keepalive')) return;
      this.metricsSub.next(JSON.parse(e.data) as ServerMetrics);
    });

    this.sse.onerror = () => {
      console.error('SSE error (metrics)');
      // EventSource tenta reconectar sozinho
    };
  }

  stop(): void {
    this.sse?.close();
    this.sse = undefined;
  }
}
