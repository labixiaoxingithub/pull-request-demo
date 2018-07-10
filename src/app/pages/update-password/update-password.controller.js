/**
 * Created by appledev097 on 10/30/17.
 */
export class UpdatePasswordController {

  constructor($state) {
    'ngInject';
    this.$state = $state;
  }

  $onInit() {

  }

  update() {
    this.$state.go('home');
  }
}