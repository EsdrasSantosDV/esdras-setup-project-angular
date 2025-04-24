import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'exercises-rxjs',
    loadChildren: async () => (await import('./features/escolinha-aula-rxjs/routes/routes')).routes,
  },
  { path: '**', component: PageNotFoundComponent },
];
