/**
 * Created by appledev097 on 10/30/17.
 */
export class DisclaimersController {

  constructor($state) {
    'ngInject';
    this.$state = $state;

    this.tabActive = 1;
  }

  $onInit() {
    this.$state.go('disclaimers.legal');
  }
}