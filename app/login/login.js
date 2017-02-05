angular.module('myContacts.login', ['ngRoute', 'firebase'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/login', {
      templateUrl: 'login/login.html',
      controller: 'LoginCtrl'
    })
}])
  .controller('LoginCtrl', ['$scope', '$firebaseAuth', '$log', function ($scope, $firebaseAuth, $log) {
    var auth = $firebaseAuth();

    $scope.showLogin = true;
    $scope.showSignup = false;
    $scope.createUser = function () {
      $scope.message = null;
      $scope.error = null

      $log.info($scope.email + ":" + $scope.password);
    }

    $scope.authUser = function () {

    }

    $scope.addUser = function () {
      $log.info($scope.signupEmail + ":" + $scope.signupPassword + ":" + $scope.signupPassword2)
    }

}]);