/**
 * Created by appledev097 on 10/31/17.
 */
class SessionService {
  constructor (localStorageService) {
    'ngInject';
    this.localStorageService = localStorageService;
  }

  setCurrentUser(user) {
    this.localStorageService.set('current-user', user);
  }

  getCurrentUser() {
    return this.localStorageService.get('current-user');
  }

  removeCurrentUser() {
    this.localStorageService.remove('current-user');
  }
}

export default SessionService;