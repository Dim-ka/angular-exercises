(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://immense-shore-26705.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
