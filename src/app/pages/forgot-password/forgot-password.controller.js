/**
 * Created by appledev097 on 10/30/17.
 */

export class ForgotPasswordController {

  constructor() {
    'ngInject';
    this.email = '';
    this.resetFailed = false;
    this.resetErrorMessage = '';
  }

  $onInit() {
  }

  setForgotSubmitFalse(form) {
    form.$submitted = false;
  }

  reset(form) {
    const emailReg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if (this.email !== '' && !emailReg.test(this.email)) {
      this.resetFailed = true;
      this.resetErrorMessage = 'Please enter the correct email address!';
    } else if (this.email !== '' && emailReg.test(this.email)){
      this.resetFailed = false;
      this.resetErrorMessage = '';
    }
  }
}