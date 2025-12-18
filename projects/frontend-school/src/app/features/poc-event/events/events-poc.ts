import { Inject, Injectable, InjectionToken } from '@angular/core';
import { EventDispatcherAbstract } from '../../../core/events/event-bus-abstract';

export const NOTIFICATION_CLIENTS_EVENTS_DISPATCHER_TOKEN = new InjectionToken<
  EventDispatcherAbstract<NotificationClientEvents>
>('NotificationClientsEventsDispatcherToken');

@Injectable()
export class NotificationClientsEventsService {
  constructor(
    @Inject(NOTIFICATION_CLIENTS_EVENTS_DISPATCHER_TOKEN)
    private readonly dispatcher: EventDispatcherAbstract<NotificationClientEvents>,
  ) {}

  dispatch<K extends keyof NotificationClientEvents>(
    event: K,
    ...payload: NotificationClientEvents[K] extends void ? [] : [NotificationClientEvents[K]]
  ) {
    this.dispatcher.emit(event, ...payload);
  }

  on<K extends keyof NotificationClientEvents>(event: K) {
    return this.dispatcher.on(event);
  }
}

export interface NotificationClientEvents {
  'notification-client-created': { id: string };
  'notification-client-updated': { id: string };
  'notification-client-deleted': { id: string };
}
