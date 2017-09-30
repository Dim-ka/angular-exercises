(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

function UserService() {
  var service = this;

  service.user = {
    firstName : "",
    lastName : "",
    email : "",
    phone : "",
    favdish : ""
  };

  service.getUserInfo = function () {
    return service.user;
  };

  service.saveUserInfo = function (user) {
    service.user = user;
  };
}
})();

