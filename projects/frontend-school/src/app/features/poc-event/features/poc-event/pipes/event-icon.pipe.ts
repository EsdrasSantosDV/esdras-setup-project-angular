import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eventIcon',
  standalone: true,
  pure: true,
})
export class EventIconPipe implements PipeTransform {
  transform(type: string): string {
    switch (type) {
      case 'notification-client-created':
        return '✨';
      case 'notification-client-updated':
        return '🔄';
      case 'notification-client-deleted':
        return '🗑️';
      default:
        return '📢';
    }
  }
}

