(function (){
  'use strict';

  angular.module("ShoppingListCheckOff", [])
  .controller("ToBuyController", ToBuyController)
  .controller("AlreadyBoughtController", AlreadyBoughtController)
  .service("ShoppingListCheckOffService", ShoppingListCheckOffService)

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyList = this;
    toBuyList.items = ShoppingListCheckOffService.toBuyList;

    toBuyList.checkoffItem = function (itemIndex){
      ShoppingListCheckOffService.checkoffItem(itemIndex);
    };

    toBuyList.is_empty = function (){
      return toBuyList.items.length == 0;
    }
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtList = this;
    boughtList.items = ShoppingListCheckOffService.boughtList;

    boughtList.is_empty = function (){
      return boughtList.items.length == 0;
    }
  };

  function ShoppingListCheckOffService() {
    var service = this;

    service.toBuyList = predefinedItems;
    service.boughtList = [];

    service.checkoffItem = function (itemIndex) {
      service.boughtList.push(service.toBuyList[itemIndex]);
      // delete 1 item on itemIndex of array
      service.toBuyList.splice(itemIndex, 1);
    }
  };

  var predefinedItems = [
    {
      name: "cookies",
      quantity: 10
    },
    {
      name: "chips",
      quantity: 5
    },
    {
      name: "milk",
      quantity: 1
    },
    {
      name: "limon",
      quantity: 2
    },
    {
      name: "apple",
      quantity: 7
    }
  ];
})();
