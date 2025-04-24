import { Routes } from '@angular/router';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
  },
  { path: 'exercises', component: ExercisesComponent },
];
