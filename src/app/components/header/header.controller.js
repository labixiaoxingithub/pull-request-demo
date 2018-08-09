/**
 * Created by appledev097 on 10/26/17.
 */
export class HeaderController {
  constructor($state, SessionService) {
    'ngInject';
    this.$state = $state;
    this.sessionService = SessionService;

    this.showUserSetting = false;
    this.currentUser = {};
  }

  $onInit() {
    this.currentUser = this.sessionService.getCurrentUser();
    this.test1 = 'test1';
    this.test1 = 'test2';
  }

  switchUserSetting() {
    this.showUserSetting = !this.showUserSetting;
  }

  logout() {
    this.sessionService.removeCurrentUser();
    this.$state.go('login');
  }
}
