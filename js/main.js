var appBeckyJane = angular.module("appBeckyJane", ["ngRoute"]);

appBeckyJane.config(["$routeProvider", function($routeProvider){
    $routeProvider.
        when("/home",{
            templateUrl: "home.html"
        }).
        when("/about",{
            templateUrl: "about.html"
        }).
        when("/drawings",{
            templateUrl: "drawings.html"
        }).
        when("/paintings",{
            templateUrl: "paintings.html"
        }).
        when("/prints",{
            templateUrl: "prints.html"
        }).
        when("/shop",{
            templateUrl: "shop.html"
        }).
        when("/contact",{
            templateUrl: "contact.html"
        }).
        when("/blog",{
            templateUrl: "blog.html"
        }).
        when("/biography",{
            templateUrl: "biography.html"
        }).
        when("/woodcut",{
            templateUrl: "woodcut.html"
        }).
        otherwise({
            redirectTo: "/home"
        });
}]);

function MainArtController($scope){
    $scope.hereIsMyButton = function (){
        console.log("here I am");
    };
    $scope.foo = "hi";
};


