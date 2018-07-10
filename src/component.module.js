/**
 * Created by appledev097 on 10/26/17.
 */
import angular from "angular";

import {App} from "./app/app.component";
import {Header} from "./app/components/header/header.component";
import {Footer} from "./app/components/footer/footer.component";
import {Login} from "./app/pages/login/login.component";
import {Home} from "./app/pages/home/home.component";
import {ForgotPassword} from "./app/pages/forgot-password/forgot-password.component";
import {UpdatePassword} from "./app/pages/update-password/update-password.component";
import {Disclaimers} from "./app/pages/disclaimers/disclaimers.component";
import {DataTab} from "./app/pages/disclaimers/tabs/data/data.component";
import {LegalTab} from "./app/pages/disclaimers/tabs/legal/legal.component";
import {PrivacyTab} from "./app/pages/disclaimers/tabs/privacy/privacy.component";
import {TermTab} from "./app/pages/disclaimers/tabs/term/term.component";

export const SeedComponentModule = angular
  .module("seed.components", [])
  .component("app", App)
  .component("header", Header)
  .component("footer", Footer)
  .component('login', Login)
  .component('home', Home)
  .component('forgotPassword', ForgotPassword)
  .component('updatePassword', UpdatePassword)
  .component('disclaimers', Disclaimers)
  .component('dataTab', DataTab)
  .component('legalTab', LegalTab)
  .component('privacyTab', PrivacyTab)
  .component('termTab', TermTab)
  .name;