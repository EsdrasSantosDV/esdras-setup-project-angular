import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: async () => (await import('../features/sse-poc/sse-poc.component')).SsePocComponent,
    children: [],
  },
];
