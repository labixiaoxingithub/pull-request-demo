/**
 * Created by appledev097 on 10/26/17.
 */
export class FooterController {
  constructor(CommonService) {
    'ngInject';
    this.currentYear = null;
  }

  $onInit() {
    this.currentYear = new Date().getFullYear();
  }
}