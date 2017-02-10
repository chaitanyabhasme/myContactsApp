angular.module('myContactsApp.contact', ['ngRoute', 'firebase'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/showContact/:id', {
    templateUrl: 'contact/showContact.html',
    controller: 'ContactCtrl'
  });
}])
.controller('ContactCtrl', ['$scope','$log','$routeParams', function ($scope, $log, $routeParams) {
  $log.info("id = " + $routeParams.id);
}]);