import 'core-js/client/shim';
import 'zone.js/dist/zone';

import {enableProdMode} from '@angular/core';
import {platformBrowser} from '@angular/platform-browser';

import {InViewDemoModuleNgFactory} from './app.module.ngfactory';

if (process.env.production) {
  enableProdMode();
}

platformBrowser().bootstrapModuleFactory(InViewDemoModuleNgFactory);
