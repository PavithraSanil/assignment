import detailCtrl from './detailCtrl';
angular.module('myApp.detail', ['ngRoute','ngStorage'])
.config(function($routeProvider){
  $routeProvider.when('/detail',{
 			 templateUrl:'detail/detail.html',
 			 controller:'detailCtrl',
 			 controllerAs:'dc'
 		 })

     .when('/profile', {
       templateUrl: './detail/profile.html',
       controller:'detailCtrl',
 			 controllerAs:'dc'
     })

})

.controller('detailCtrl',detailCtrl);
