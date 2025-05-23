const app = angular.module("myApp", []);

app.controller("EventController", function($scope) {
    // Click Event
    $scope.showAlert = function() {
        alert("Button Clicked!");
    };

    // Mouse Move Event using $event
    $scope.trackMouse = function($event) {
        $scope.mouseX = $event.clientX;
        $scope.mouseY = $event.clientY;
    };
});
