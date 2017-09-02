(function (){
  'use strict';

  angular.module("LunchCheck", [])

  .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {

    $scope.items = ""

    $scope.checkItems = function (){
      var itemCount = countItems($scope.items);
      displayMessage(itemCount);
    };

    function displayMessage(itemCount){
      var message;
      var validationState = "has-success";
      if (itemCount == 0){
        message = "Please enter data first";
        validationState = "has-error"
      } else if (itemCount <= 3) {
        message = "Enjoy!";
      } else {
        message = "Too much!";
      }
      $scope.message = message;
      $scope.validationState = validationState;
    };

    function countItems(items){
      var re = /\s*,\s*/;
      // split and filter all "" elements
      // "" filtered because "" is falsy
      var itemCount = items.split(re).filter(function(i){return i}).length;
      return itemCount;
    };
  };
})();
