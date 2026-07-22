import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideRouter } from '@angular/router';

import { environment } from '../environments/environment';
import { routes } from './app.routes';

const firebaseConfig = environment.firebase;
const firebaseProviders = firebaseConfig ? [provideFirebaseApp(() => initializeApp(firebaseConfig))] : [];

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideRouter(routes), ...firebaseProviders],
};
