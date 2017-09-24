(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['user', '$state'];
function SignupController(user, $state) {
  var $reg = this;
  $reg.user = user;

  $reg.submit = function () {
    $reg.completed = true;
    console.log($reg.user);
    $state.go('public.userinfo');
  };
}

})();

