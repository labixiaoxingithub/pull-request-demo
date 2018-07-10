import "angular";
import '@uirouter/angularjs';
import 'angular-cookies';
import 'angular-local-storage';

import routesConfig from "./routes";
import {SeedComponentModule} from './component.module';
import {SeedServiceModule} from "./service.module";

angular
  .module('seed', [
    'ui.router',
    'ngCookies',
    'LocalStorageModule',
    SeedComponentModule,
    SeedServiceModule
  ])
  .config(routesConfig);