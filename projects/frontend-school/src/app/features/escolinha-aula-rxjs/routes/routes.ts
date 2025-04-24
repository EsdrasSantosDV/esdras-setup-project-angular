import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: async () =>
      (await import('../features/exercises-rxjs/exercises-rxjs.component')).ExercisesRxjsComponent,
    children: [],
  },
];
