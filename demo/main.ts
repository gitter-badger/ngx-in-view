import 'core-js/client/shim';
import 'zone.js/dist/zone';

import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {InViewDemoModule} from './app.module';

if (process.env.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(InViewDemoModule);
