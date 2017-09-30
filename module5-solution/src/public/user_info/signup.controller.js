(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['user', '$state', 'MenuService'];
function SignupController(user, $state, MenuService) {
  var $reg = this;
  $reg.user = user;

  $reg.checkDish = function (short_name, handler) {
    var promise = MenuService.getMenuItem(short_name);

    var res;
    promise.then(function (response){
      handler(true);
    })
    .catch(function (error){
      handler(false);
    });
  };

  $reg.submit = function () {
    $reg.checkDish($reg.user.favdish, function (exists) {
      if (exists) {
        $reg.saved = true;
        setTimeout(function(){$state.go('public.userinfo')}, 5000);
      } else {
        $reg.dish_not_exists = true;
      };
    });
  };
}

})();

