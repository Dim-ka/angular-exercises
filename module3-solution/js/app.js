(function (){
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItems);

  function FoundItems() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        found: '<',
        onRemove: '&'
      },
      controller: NarrowItDownController,
      controllerAs: 'menu',
      bindToController: true
    };

    return ddo;
  }

  NarrowItDownController.$inject = ['MenuSearchService']
  function NarrowItDownController(MenuSearchService) {
    var menu = this;

    menu.searchTerm = "";

    menu.narrowDown = function(searchTerm) {
      if (searchTerm == "") {
        menu.found = [];
        return;
      };
      menu.loadingStatus = "Loading...";
      var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

      promise.then(function (response){
        menu.found = response;
        menu.loadingStatus = "";
      })
      .catch(function (error){
        menu.loadingStatus = "Failed to get items";
      });
    };

    menu.foundEmpty = function(){
      return menu.found && menu.found.length == 0;
    };

    menu.removeItem = function(index){
      console.log(menu.found[index].name);
      menu.found.splice(index,1);
    };
  };

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http){
    var service = this;

    service.getMatchedMenuItems = function (searchTerm){
      return $http({
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
      }).then(function (result) {
        // process result and only keep items that match
        var foundItems = result.data.menu_items.filter(function(item){
          return item.description.search(new RegExp(searchTerm, "i")) !== -1;
        });

        // return processed items
        return foundItems;
      });
    };
  };
})();
