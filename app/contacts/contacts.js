angular.module('myContacts.contacts', ['ngRoute', 'firebase'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/contacts', {
      templateUrl: 'contacts/contacts.html',
      controller: 'ContactsCtrl'
    });
}])
  // Contacts controller
  .controller('ContactsCtrl', ['$scope', '$firebaseArray','$firebaseObject', function ($scope, $firebaseArray, $firebaseObject) {

    //init firebase
    var firebaseRef = firebase.database().ref();
    // get contacts
    $scope.contacts = $firebaseArray(firebaseRef);

    // clear the form fields
    $scope.clearFields = function () {
      $scope.name = "";
      $scope.email = "";
      $scope.company = "";
      $scope.mobile_phone = "";
      $scope.home_phone= "";
      $scope.work_phone= "";
      $scope.state_address= "";
      $scope.city = "";
      $scope.state = "";
      $scope.zipcode = "";
    };

    // show add form
    $scope.showAddForm = function () {
      $scope.clearFields();
      $scope.addFormShow = true;
    };

    // hide forms
    $scope.hide = function () {
      $scope.addFormShow = false;
    };

    // add contact
    $scope.addFormSubmit = function () {
      // assign the form values
      if ($scope.name) {
        var name = $scope.name;
      } else {
        var name = null;
      }
      if ($scope.email) {
        var email = $scope.email;
      } else {
        var email = null;
      }
      if ($scope.company) {
        var company = $scope.company;
      } else {
        var company = null;
      }
      if ($scope.work_phone) {
        var work_phone = $scope.work_phone;
      } else {
        var work_phone = null;
      }
      if ($scope.mobile_phone) {
        var mobile_phone = $scope.mobile_phone;
      } else {
        var mobile_phone = null;
      }
      if ($scope.home_phone) {
        var home_phone = $scope.home_phone;
      } else {
        var home_phone = null;
      }
      if ($scope.street_address) {
        var street_address = $scope.street_address;
      } else {
        var street_address = null;
      }
      if ($scope.city) {
        var city = $scope.city
      } else {
        var city = null;
      }
      if ($scope.state) {
        var state = $scope.state;
      } else {
        var state = null;
      }
      if ($scope.zipcode) {
        var zipcode = $scope.zipcode;
      } else {
        var zipcode = null;
      }

      //build object

      $scope.contacts.$add({
        name: name,
        email: email,
        company: company,
        phones: [
          {
            mobile: mobile_phone,
            home: home_phone,
            work: work_phone
          }
        ],
        address: [
          {
            street_address: street_address,
            city: city,
            state: state,
            zip_code: zipcode
          }
        ]
      }).then(function (ref) {
        // clear the form
        $scope.clearFields();

        // hide forms
        $scope.hide();

        // message
        $scope.msg = 'Contact Added';
      });

    };

    $scope.removeContact = function(contact){
      var ref = firebase.database().ref(contact.$id);
      var obj = $firebaseObject(ref);
      obj.$remove().then(function(ref) {
        console.log('Contact deleted from db');
        console.log(ref);
      }, function(error) {
        console.log("Error:", error);
      });
    };
}]);