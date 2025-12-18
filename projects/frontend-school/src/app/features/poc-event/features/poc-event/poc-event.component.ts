import { ChangeDetectionStrategy, Component, inject, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NotificationClientsEventsService,
  NOTIFICATION_CLIENTS_EVENTS_DISPATCHER_TOKEN,
} from '../../events/events-poc';
import { provideEventDispatcher } from '../../../../core/events/event-bus-abstract';
import { Subject, takeUntil, tap } from 'rxjs';
import { EventIconPipe } from './pipes/event-icon.pipe';
import { EventColorPipe } from './pipes/event-color.pipe';
import { FormatTimePipe } from './pipes/format-time.pipe';

interface EventLog {
  id: string;
  type: keyof import('../../events/events-poc').NotificationClientEvents;
  payload: { id: string };
  timestamp: Date;
}

@Component({
  selector: 'esdras-khan-poc-event',
  standalone: true,
  imports: [CommonModule, EventIconPipe, EventColorPipe, FormatTimePipe],
  templateUrl: './poc-event.component.html',
  styleUrl: './poc-event.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideEventDispatcher(NOTIFICATION_CLIENTS_EVENTS_DISPATCHER_TOKEN), NotificationClientsEventsService],
})
export class PocEventComponent implements OnInit, OnDestroy {
  private readonly eventsService = inject(NotificationClientsEventsService);
  private readonly destroy$ = new Subject<void>();

  readonly eventLogs = signal<EventLog[]>([]);
  readonly eventCounts = signal({
    created: 0,
    updated: 0,
    deleted: 0,
  });

  ngOnInit(): void {
    // Escutar evento de criação
    this.eventsService
      .on('notification-client-created')
      .pipe(
        tap((payload) => {
          this.addEventLog('notification-client-created', payload);
          this.eventCounts.update((counts) => ({ ...counts, created: counts.created + 1 }));
        }),
        takeUntil(this.destroy$),
      )
      .subscribe();

    // Escutar evento de atualização
    this.eventsService
      .on('notification-client-updated')
      .pipe(
        tap((payload) => {
          this.addEventLog('notification-client-updated', payload);
          this.eventCounts.update((counts) => ({ ...counts, updated: counts.updated + 1 }));
        }),
        takeUntil(this.destroy$),
      )
      .subscribe();

    // Escutar evento de deleção
    this.eventsService
      .on('notification-client-deleted')
      .pipe(
        tap((payload) => {
          this.addEventLog('notification-client-deleted', payload);
          this.eventCounts.update((counts) => ({ ...counts, deleted: counts.deleted + 1 }));
        }),
        takeUntil(this.destroy$),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private addEventLog(
    type: keyof import('../../events/events-poc').NotificationClientEvents,
    payload: { id: string },
  ): void {
    const log: EventLog = {
      id: crypto.randomUUID(),
      type,
      payload,
      timestamp: new Date(),
    };
    this.eventLogs.update((logs) => [log, ...logs].slice(0, 50)); // Manter apenas os últimos 50 eventos
  }

  dispatchCreated(): void {
    const id = `client-${Date.now()}`;
    this.eventsService.dispatch('notification-client-created', { id });
  }

  dispatchUpdated(): void {
    const id = `client-${Date.now()}`;
    this.eventsService.dispatch('notification-client-updated', { id });
  }

  dispatchDeleted(): void {
    const id = `client-${Date.now()}`;
    this.eventsService.dispatch('notification-client-deleted', { id });
  }

  clearLogs(): void {
    this.eventLogs.set([]);
    this.eventCounts.set({ created: 0, updated: 0, deleted: 0 });
  }
}
