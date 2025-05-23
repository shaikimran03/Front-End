const app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/home", {
            template: "<h3>🏠 Welcome to the Home Page!</h3><p>This is the home section.</p>"
        })
        .when("/about", {
            template: "<h3>ℹ️ About Us</h3><p>Learn more about our work.</p>"
        })
        .when("/contact", {
            template: "<h3>📞 Contact Us</h3><p>Reach out to us anytime.</p>"
        })
        .otherwise({
            template: "<h3>❌ 404 Error</h3><p>Page not found.</p>"
        });
});
