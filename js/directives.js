appBeckyJane.directive("testDirective", function(){
    function Link($scope, element, attr){
        console.log("hello from test directive TEST");
    }

    return {
        link: Link,
        restrict: "C"
    }
});