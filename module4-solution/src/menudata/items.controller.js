(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['categoryWithItems'];
function ItemsController(categoryWithItems) {
  var list = this;
  list.categoryName = categoryWithItems.category.name;
  list.items = categoryWithItems.menu_items;
}

})();


