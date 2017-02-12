angular.module('myContactsApp.contact', ['ngRoute', 'firebase'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/showContact/:id', {
    templateUrl: 'contact/showContact.html',
    controller: 'ContactCtrl'
  }).when('/editContact/:id', {
    templateUrl: 'contact/editContact.html',
    controller: 'ContactCtrl'
  });
}])
.controller('ContactCtrl', ['$scope','$log','$location','$routeParams','$firebaseObject', function ($scope, $log, $location, $routeParams, $firebaseObject) {

  // firebase ref with id
  var firebaseRef = firebase.database().ref($routeParams.id);
  var obj = $firebaseObject(firebaseRef);
  // add the obj to scope
  $scope.contact = obj;

  $scope.editFormSubmit = function(){
    // save the changed obj
    obj.$save().then(function(ref) {
      // go to contact after edit
      $location.path("/contacts");
    }, function(error) {
      console.log("Error:", error);
    });
  };

  $scope.deleteContact = function(){
    // remove the required obj
    obj.$remove().then(function(ref) {
      // go to contact after edit
      $log.info('Contact deleted from db');
      $location.path("/contacts");
    }, function(error) {
      console.log("Error:", error);
    });
  };
}]);