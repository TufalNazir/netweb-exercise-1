import { Route } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { NotFoundComponent } from './common/not-found.component';

export const appRoutes: Route[] = [
  {
    path: 'teacher', canActivate: [AuthGuard],
    loadChildren: () => import('teacher/Routes').then((m) => m.remoteRoutes)
  },
  {
    path: 'student', canActivate: [AuthGuard],
    loadChildren: () => import('student/Routes').then((m) => m.remoteRoutes)
  },
  {
    path: 'login',
    loadChildren: () => import('login/Routes').then((m) => m.remoteRoutes)
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**', // Wildcard route
    component: NotFoundComponent // Redirect to "not found" component
  }
];
