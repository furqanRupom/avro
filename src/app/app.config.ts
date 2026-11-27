import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient,withFetch,withInterceptors } from '@angular/common/http';
import { baseUrlInterceptor } from './core/interceptors/base-url-interceptor';
import { Auth } from './core/services/auth';
import { credentialsInterceptor } from './core/interceptors/credentials-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([baseUrlInterceptor,credentialsInterceptor]), withFetch()),
    provideAppInitializer(() => inject(Auth).init())
  ]
};
