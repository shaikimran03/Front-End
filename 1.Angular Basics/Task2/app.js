 //2. Understand a module and program to include a directive and a controller inside a 
//module from external js file. 
// Define an AngularJS module named 'myApp'
// This module acts as a container for the application's components (controllers, directives, etc.)
var app = angular.module('myApp', []);

// Define a controller named 'MainController'
// This controller is responsible for setting up the $scope data
app.controller('MainController', function($scope) {
    // Add a message to the scope so it can be displayed in the view using {{ message }}
    $scope.message = "Hello from MainController!";
});

// Define a custom directive named 'customDirective'
// Directives allow you to create new HTML elements or attributes with custom behavior
app.directive('customDirective', function() {
    return {
        // The template defines what will be rendered when the directive is used
        template: "<p>This is content from a custom directive.</p>"
    };
});
