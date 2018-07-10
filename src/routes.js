export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix("!");
  $urlRouterProvider.otherwise("/login");

  $stateProvider.state("login", {
    url: "/login",
    component: "login"
  });

  $stateProvider.state("home", {
    url: "/home",
    component: "home"
  });

  $stateProvider.state("forgot-password", {
    url: "/forgot-password",
    component: "forgotPassword"
  });

  $stateProvider.state("update-password", {
    url: "/update-password",
    component: "updatePassword"
  });

  $stateProvider.state("disclaimers", {
    url: "/disclaimers",
    component: "disclaimers"
  });

  $stateProvider.state("disclaimers.data", {
    url: "/data",
    component: "dataTab"
  });

  $stateProvider.state("disclaimers.legal", {
    url: "/legal",
    component: "legalTab"
  });

  $stateProvider.state("disclaimers.privacy", {
    url: "/privacy",
    component: "privacyTab"
  });

  $stateProvider.state("disclaimers.term", {
    url: "/term",
    component: "termTab"
  });
}
