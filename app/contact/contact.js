angular.module('myContactsApp.contact', ['ngRoute', 'firebase'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/showContact/:id', {
    templateUrl: 'contact/showContact.html',
    controller: 'ContactCtrl'
  });
}])
.controller('ContactCtrl', ['$scope','$log','$routeParams','$firebaseObject', function ($scope, $log, $routeParams, $firebaseObject) {
  var firebaseRef = firebase.database().ref($routeParams.id);
  var obj = $firebaseObject(firebaseRef);
  $scope.contact = obj;
}]);