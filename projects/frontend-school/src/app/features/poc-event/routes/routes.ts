import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: async () =>
      (await import('../features/poc-event/poc-event.component')).PocEventComponent,
    children: [],
  },
];

