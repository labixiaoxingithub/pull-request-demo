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
    let test2 = 'test2';
    let test3 = 'test3';
    let test5 = 'test5';
  }

  setForgotSubmitFalse(form) {
    form.$submitted = false;
  }

  reset(form) {
    const emailReg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if (this.email !== '' && !emailReg.test(this.email)) {
      this.resetFailed = true;
      this.resetErrorMessage = 'Please enter the correct emai l address!';
    } else if (this.email !== '' && emailReg.test(this.email)){
      this.resetFailed = false;
      this.resetErrorMessage = '';
    }
  }
}