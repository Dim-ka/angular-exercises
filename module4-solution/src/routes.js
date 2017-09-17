(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

    // Home page
    .state('home', {
      url: '/',
      templateUrl: 'src/menudata/templates/home.template.html'
    })

    // Premade categories page
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menudata/templates/categories.template.html',
      controller: 'CategoriesController as categories',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    // Premade items page
    .state('items', {
      url: '/categories/{categoryShortName}',
      templateUrl: 'src/menudata/templates/items.template.html',
      controller: 'ItemsController as items',
      resolve: {
        categoryWithItems: ['$stateParams', 'MenuDataService',
          function ($stateParams, MenuDataService) {
          return MenuDataService.
              getItemsForCategory($stateParams.categoryShortName);
        }]
      }
    });
  }

})();
