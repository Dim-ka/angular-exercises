(function () {
"use strict";

angular.module('public')
.controller('UserInfoController', UserInfoController);

UserInfoController.$inject = ['user'];
function UserInfoController(user) {
  var $info = this;
  $info.user = user;

  console.log($info.user);
}

})();

