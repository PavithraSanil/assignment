import loginCtrl from './login/loginCtrl';
import detailCtrl from './detail/detailCtrl';
import updateCtrl from './update/update';
import empService from './service/empService';
import HeaderDirective from './directives/header';
import FooterDirective from './directives/footer';
import './temp/temp';
import './login/login';
import './detail/detail';
import './update/updat';
import './service/service';

angular.module('myApp', ['ngRoute','ngStorage','myApp.temp','myApp.login','myApp.detail','myApp.update','myApp.service'])
  .config(function($routeProvider){
    $routeProvider//.when('/detail',{
 	// 		 templateUrl:'detail/detail.html',
 	// 		 controller:'detailCtrl',
 	// 		 controllerAs:'dc'
 	// 	 })

      
     .when('/reload',{
      redirectTo:'/detail'
 		 })

     .when('/logout',{
 			 templateUrl:'login/login.html',
 			 controller:'loginCtrl',
 			 controllerAs:'lc'
 		 })
	})



  // .run(function($localStorage, $rootScope){
  //   if($localStorage.logoutflag==0){
  //   $localStorage.logflag=1;
  //   $rootScope.logflag=1;
  // }
  // })

  // .controller('loginCtrl',loginCtrl)
  // .controller('detailCtrl',detailCtrl)
  // .controller('updateCtrl',updateCtrl)
  //.service('empService', empService)
  .directive('headerDirective', () => new HeaderDirective)
  .directive('footerDirective', () => new FooterDirective);
