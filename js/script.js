
var app = angular.module("Design",['ngRoute'])

.config(['$routeProvider', function($routeProvider){
           
    $routeProvider
    .when('/',{
        templateUrl : 'views/main.html',
        controller : 'MainController'
    })
      .when('/home',{
        templateUrl : 'views/main.html',
        controller : 'MainController'
    })
     .when('/services',{
        templateUrl : 'views/services.html',
        controller : 'MyController'
    })
     .when('/about',{
        templateUrl : 'views/about.html',
        controller : 'MyController'
    })
     .when('/contact',{
        templateUrl : 'views/contact.html',
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