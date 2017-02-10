'use strict';

// Declare app level module which depends on views, and components
angular.module('myContactsApp', ['ngRoute', 'myContacts.contacts', 'myContacts.login', 'myContactsApp.contact'])
  .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({
      redirectTo: '/login'
    });
}]);