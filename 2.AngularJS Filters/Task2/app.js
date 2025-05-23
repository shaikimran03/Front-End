// Define the AngularJS application module
var app = angular.module('myApp', []);

// Custom service that returns a message
app.service('myService', function() {
  this.getMessage = function() {
    return "This is a custom service message!";
  };
});

// Main controller
app.controller('MainCtrl', function($scope, $location, $http, $timeout, myService) {

  // $location - get current URL path
  $scope.path = $location.absUrl();

  // $timeout - delay a message display
  $timeout(function() {
    $scope.timeoutMessage = "This message appeared after 2 seconds!";
  }, 2000);

  // $http - get data from local JSON file
  $http.get('data.json').then(function(response) {
    $scope.items = response.data.fruits;
  }, function(error) {
    $scope.items = ["Error loading data"];
  });

  // Use custom service
  $scope.customMessage = myService.getMessage();
});
