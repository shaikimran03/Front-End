const app = angular.module("myApp", []);

app.controller("AnimationController", function($scope) {
    $scope.isVisible = true; // Initial state

    $scope.toggleMessage = function() {
        $scope.isVisible = !$scope.isVisible; // Toggle visibility
    };
});
