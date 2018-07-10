/**
 * Created by appledev097 on 10/31/17.
 */
class ApiService {
  constructor ($http, $q) {
    'ngInject';
    this.$http = $http;
    this.$q = $q;
  }

  get(url, data) {
    return this.http({
      method: "get",
      url: url,
      data: data,
      headers: {}
    });
  };

  post(url, data) {
    return this.http({
      method: "post",
      url: url,
      data: data,
      headers: {}
    });
  }

  put(url, data) {
    return this.http({
      method: "post",
      url: url,
      data: data,
      headers: {
        "X-METHOD": "PUT"
      }
    });
  }

  delete(url, data) {
    return this.http({
      method: "post",
      url: url,
      data: data,
      headers: {
        "X-METHOD": "DELETE",
        "Content-Type": "application/json"
      }
    });
  }

  http(req) {
    const deferred = this.$q.defer();
    this.$http(req).then(res => {
      deferred.resolve(res);
    }, err => {
      deferred.reject(err);
    });
    return deferred.promise;
  }

}

export default ApiService;