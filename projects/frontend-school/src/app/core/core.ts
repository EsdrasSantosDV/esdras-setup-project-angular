import {
  provideRouter,
  Routes,
  withComponentInputBinding,
  withEnabledBlockingInitialNavigation,
  withInMemoryScrolling,
  withRouterConfig,
} from '@angular/router';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { spinnerInterceptor } from './interceptors/spinner/spinner.interceptor';
import { authInterceptor } from './interceptors/auth/auth.interceptor';
import { loggingInterceptor } from './interceptors/logging/logging.interceptor';
import { cachingInterceptor } from './interceptors/caching/caching.interceptor';
import { AppInterceptor } from './interceptors/app/app.interceptor';

export interface CoreOptions {
  routes: Routes;
}

export function provideCore({ routes }: CoreOptions) {
  return [
    provideExperimentalZonelessChangeDetection(),
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptorsFromDi(),
      withInterceptors([spinnerInterceptor, authInterceptor, loggingInterceptor, cachingInterceptor]),
    ),
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
    provideRouter(
      routes,
      withRouterConfig({
        onSameUrlNavigation: 'reload',
      }),
      withComponentInputBinding(),
      withEnabledBlockingInitialNavigation(),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
    ),
  ];
}
