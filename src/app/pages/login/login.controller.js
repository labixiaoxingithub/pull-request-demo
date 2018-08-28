/**
 * Created by appledev097 on 10/26/17.
 */
export class LoginController {

  constructor($cookies, $state, CommonService, ApiService, SessionService) {
    'ngInject';
    this.$cookies = $cookies;
    this.$state = $state;
    this.commonService = CommonService;
    this.apiService = ApiService;
    this.sessionService = SessionService;

    this.isRememberMeSelected = false;
    this.loginFailed = false;
    this.loginErrorMessage = '';
    this.credentials = {
      guid: null,
      password: null
    }
  }

  $onInit() {
    const loggedInUser = this.$cookies.get('loggedInUser');

    this.isRememberMeSelected = loggedInUser ? true : false;
    this.credentials.guid = this.isRememberMeSelected ? loggedInUser : '';
  }

  login(form) {
    if (form.$valid) {
      if (this.isRememberMeSelected) {
        this.$cookies.put('loggedInUser', this.credentials.guid);
      } else {
        this.$cookies.remove('loggedInUser');
      }
      this.apiService.get('src/app/shared/data/test-user.json').then(resp => {
        console.log(resp);
        console.log(resp);
        this.sessionService.setCurrentUser(resp.data);
        resp.data.status === 'NEW_USER' ? this.$state.go('update-password') : this.$state.go('home');
      }).catch(err => {
        console.log(err);
      });
    }
  }

  setLoginSubmitFalse(form) {
    form.$submitted = false;
  }
}