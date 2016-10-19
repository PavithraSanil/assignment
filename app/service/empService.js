export default class empService {
	/*
	  The below annotation will be processes by ngAnnotate, which
	  will annotate the constructor after compiling for minification.
	*/
	/*@ngInject;*/
		constructor($http,$localStorage,$rootScope) {
			this.http = $http;
			this.ls=$localStorage;
			this.rs=$rootScope;
			// $localStorage.logflag=0;
		  // $rootScope.logflag=0;
		}

		logfunction(){
			if(this.ls.logoutflag==0){
				this.ls.logflag=1;
				this.rs.logflag=1;
				return true;
			}
			else{
				return false;
			}
		}

  	getData () {
      return this.http({
				method: 'GET',
				url: 'http://192.168.121.232/employee.php'
			 });
    }

		authentication(uname,pwd){
     return this.http({
			 method:'POST',
			 url:'http://192.168.121.232/employee.php',
			 headers:{'Content-Type': 'application/json'},
			 data:{"username":uname, "password":pwd}
		 });
 		}

	 updateEmpData(cid,fname,lname,gen,desig,desc){
		return this.http({
			method:'PUT',
			url:'http://192.168.121.232/employee.php',
			headers:{'Content-Type': 'application/json'},
			data:{"cid":cid, "first_name":fname, "last_name":lname, "gender":gen, "designation":desig, "description":desc}
		});
		}

		getEmp(id) {
				return this.http({
					method:'GET',
					url:'http://192.168.121.232/employee.php?cid='+id
				});
		}

		deleteObj(id){
				return this.http({
					method:'DELETE',
					url:'http://192.168.121.232/employee.php',
					data:{"cid":id}
				});
		}

		createEmpData(fname,lname,gen,desig,desc){
			return this.http({
				method:'POST',
				url:'http://192.168.121.232/employee.php',
				headers:{'Content-Type': 'application/json'},
				data:{"first_name":fname, "last_name":lname, "gender":gen, "designation":desig, "description":desc}
		});
	}
  }


//   getData () {
//     return this._$http({method: 'GET', url: 'http://www.mocky.io/v2/57f4d4dd250000900e134847' });
//   }
// }

 // PersonService.$inject = ['$http'];
