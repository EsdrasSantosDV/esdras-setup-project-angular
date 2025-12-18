import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eventColor',
  standalone: true,
  pure: true,
})
export class EventColorPipe implements PipeTransform {
  transform(type: string): string {
    switch (type) {
      case 'notification-client-created':
        return 'created';
      case 'notification-client-updated':
        return 'updated';
      case 'notification-client-deleted':
        return 'deleted';
      default:
        return '';
    }
  }
}

