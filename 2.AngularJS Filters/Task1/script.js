//       
//1. Program to apply various filters like date, uppercase, lowercase, number etc. and 
//also apply a custom filter. 
// Define AngularJS app
var app = angular.module('myApp', []);

// Controller with sample data
app.controller('FilterCtrl', function($scope) {
  $scope.sampleText = "AngularJS Filters";
  $scope.today = new Date(); // current date/time
  $scope.amount = 12345.6789;
});

// Custom filter to reverse a string
app.filter('reverse', function() {
  return function(input) {
    if (!input) return '';
    return input.split("").reverse().join("");
  };
});
