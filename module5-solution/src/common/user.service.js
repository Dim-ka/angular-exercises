(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

function UserService() {
  var service = this;

  service.user = {
    firstName : "First",
    lastName : "Last",
    email : "asdf@asd",
    phone : "9999999",
    favdish : "as"
  };

  service.getUserInfo = function () {
    return service.user;
  };

  service.saveUserInfo = function (user) {
    service.user = user;
  };
}
})();

