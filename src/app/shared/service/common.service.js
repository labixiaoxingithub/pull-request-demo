/**
 * Created by appledev097 on 10/24/17.
 */
class CommonService {
    constructor ($http) {
        'ngInject';
        this.$http = $http;
    }

    print() {
        console.log('print');
    };

}

export default CommonService;