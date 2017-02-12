angular.module('myContacts.login', ['ngRoute', 'firebase'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/login', {
      templateUrl: 'login/login.html',
      controller: 'LoginCtrl'
    })
}])
  .controller('LoginCtrl', ['$scope', '$firebaseAuth', '$log', '$location', function ($scope, $firebaseAuth, $log, $location) {
    $scope.authObj = $firebaseAuth(firebase.auth());

    $scope.showLogin = true;
    $scope.showSignup = false;

    $scope.authUser = function () {
      $scope.authObj.$signInWithEmailAndPassword($scope.email, $scope.password).then(function(firebaseUser) {
        $location.path('/contacts');
      }).catch(function(error) {
        console.error("Authentication failed:", error);
      });
    };

    $scope.addUser = function () {
      $log.info($scope.signupEmail + ":" + $scope.signupPassword + ":" + $scope.signupPassword2);
      $scope.authObj.$createUserWithEmailAndPassword($scope.signupEmail, $scope.signupPassword)
        .then(function(firebaseUser) {
          $scope.showLogin = true;
          $scope.showSignup = false;
        }).catch(function(error) {
        console.error("Error: ", error);
      });

    };

}]);