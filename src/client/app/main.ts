import {APP_BASE_HREF} from '@angular/common';
import {enableProdMode, provide} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {provideRouter} from '@ngrx/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

import * as AngularFire2 from 'angularfire2';

if ('<%= ENV %>' === 'prod') {
  enableProdMode();
}

bootstrap(AppComponent, [
  AngularFire2.FIREBASE_PROVIDERS,
  AngularFire2.defaultFirebase('https://incandescent-torch-2538.firebaseIO.com'),
  AngularFire2.firebaseAuthConfig({
    provider: AngularFire2.AuthProviders.Password,
    method: AngularFire2.AuthMethods.Password,
    remember: 'sessionOnly'
  }),

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
