(function () {
"use strict";

angular.module('public')
.controller('UserInfoController', UserInfoController);

UserInfoController.$inject = ['user', 'MenuService', 'ApiPath'];
function UserInfoController(user, MenuService, ApiPath) {
  var $info = this;
  $info.user = user;

  /*$info.user = {
    firstName : "GGGGG",
    favdish : 'L1'
  }*/

  var promise = MenuService.getMenuItem($info.user.favdish);

  promise.then(function (favdish) {
    $info.favdish = favdish;
    $info.favdish.url = ApiPath + '/images/' + favdish.short_name + '.jpg'
  });

  $info.empty = function () {
    return $info.user.firstName == ""
  };
}

})();

