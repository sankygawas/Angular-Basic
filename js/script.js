
var app = angular.module("Design",['ngRoute'])

.config(['$routeProvider', function($routeProvider){
           
    $routeProvider
    .when('/',{
        templateUrl : 'views/main.html',
        controller : 'MainController'
    })
      .when('/route1',{
        templateUrl : 'views/main.html',
        controller : 'MainController'
    })
     .when('/route2',{
        templateUrl : 'views/services.html',
        controller : 'MyController'
    })
   .otherwise({
        redirectTo : '/'
    });
   
}])
.controller('MainController',function($scope){
    $scope.msg="in Main Controller";
})
.controller('MyController',function($scope){
  $scope.msg = "this is myMsg"  ;
});