import updateCtrl from './update';
angular.module('myApp.update', ['ngRoute','ngStorage'])
.config(function($routeProvider){
  $routeProvider .when('/update/:id', {
       templateUrl:'update/update.html',
       controller:'updateCtrl',
       controllerAs:'uc'
     })

     .when('/create', {
       templateUrl:'update/update.html',
       controller:'updateCtrl',
       controllerAs:'uc'
     })

     .when('/detail',{
    			 templateUrl:'detail/detail.html',
    			 controller:'detailCtrl',
    			 controllerAs:'dc'
    		 })
})

.controller('updateCtrl',updateCtrl);
