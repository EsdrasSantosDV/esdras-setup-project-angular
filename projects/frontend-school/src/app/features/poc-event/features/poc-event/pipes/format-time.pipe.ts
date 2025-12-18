import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTime',
  standalone: true,
  pure: true,
})
export class FormatTimePipe implements PipeTransform {
  transform(date: Date): string {
    return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }
}

