import {
  provideRouter,
  Routes,
  withComponentInputBinding,
  withEnabledBlockingInitialNavigation,
  withInMemoryScrolling,
  withRouterConfig,
} from '@angular/router';
import { isDevMode, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { spinnerInterceptor } from './interceptors/spinner/spinner.interceptor';
import { authInterceptor } from './interceptors/auth/auth.interceptor';
import { loggingInterceptor } from './interceptors/logging/logging.interceptor';
import { AppInterceptor } from './interceptors/app/app.interceptor';
import { provideTransloco } from '@jsverse/transloco';
import { TranslocoService } from './transloco/transloco-loader';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouterStore } from '@ngrx/router-store';

export interface CoreOptions {
  routes: Routes;
}

export function provideCore({ routes }: CoreOptions) {
  return [
    provideExperimentalZonelessChangeDetection(),
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptorsFromDi(),
      withInterceptors([spinnerInterceptor, authInterceptor, loggingInterceptor]),
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
    provideTransloco({
      config: {
        availableLangs: ['pt', 'en'],
        defaultLang: 'pt',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoService,
    }),
    provideStore(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: true,
      traceLimit: 75,
    }),
    provideRouterStore(),
  ];
}
