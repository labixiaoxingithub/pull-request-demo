/**
 * Created by appledev097 on 10/26/17.
 */
import angular from "angular";

import CommonService from "./app/shared/service/common.service";
import ApiService from "./app/shared/service/api.service";
import SessionService from "./app/shared/service/session.service";

export const SeedServiceModule = angular
  .module('seed.service', [])
  .service('CommonService', CommonService)
  .service('ApiService', ApiService)
  .service('SessionService', SessionService)
  .name;