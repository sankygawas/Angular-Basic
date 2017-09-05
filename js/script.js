
var app = angular.module("Design",['ngRoute'])

.config(function($routeProvider){
           
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
        controller : 'ServiceController'
    })
     .when('/about',{
        templateUrl : 'views/about.html',
        controller : 'MainController'
    })
     .when('/contact',{
        templateUrl : 'views/contact.html',
        controller : 'ContactController'
    })
   .otherwise({
        redirectTo : '/'
    });
   
})
.controller('MainController',function($scope,$http){
     $http.get("data/services.json").then(function(response){
        $scope.services = response.data;
    });
})
.controller('ServiceController',function($scope,$http){
    $http.get("data/services.json").then(function(response){
        $scope.services = response.data;
    });
})
.controller('ContactController',function($scope,$http){
      $http.get("data/locations.json").then(function(response){
        $scope.locations = response.data;
    });
})

