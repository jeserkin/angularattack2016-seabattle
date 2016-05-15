import {APP_BASE_HREF} from '@angular/common';
import {enableProdMode, provide} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {provideRouter} from '@ngrx/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

import {FIREBASE_PROVIDERS, defaultFirebase} from 'angularfire2';

if ('<%= ENV %>' === 'prod') {
  enableProdMode();
}

bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase('https://incandescent-torch-2538.firebaseIO.com'),

  provideRouter(routes),
  provide(APP_BASE_HREF, {useValue: '<%= APP_BASE %>'})
]);

// In order to start the Service Worker located at "./worker.js"
// uncomment this line. More about Service Workers here
// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
//
// if ('serviceWorker' in navigator) {
//   (<any>navigator).serviceWorker.register('./worker.js').then((registration: any) =>
//       console.log('ServiceWorker registration successful with scope: ', registration.scope))
//     .catch((err: any) =>
//       console.log('ServiceWorker registration failed: ', err));
// }
