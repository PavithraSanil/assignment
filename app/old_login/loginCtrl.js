export default class loginCtrl {
	/*@ngInject;*/
	constructor($scope,$location,$http,empService,$rootScope,$localStorage) {
		console.log("VIEW CONTROLLER");
    this.scope=$scope;
		this.http=$http;
		this.location=$location;
		this.emp=empService;
		this.ls=$localStorage;
		this.rs=$rootScope;
		//this.ls.logflag=0;
	}

    submit(){
				this.emp.authentication(this.scope.uname, this.scope.password).then(res => {
			    this.scope.header = res.data.header;
					console.log(this.scope.header)

		      if(this.scope.header.status==200){
		        console.log('loggged in');
						this.ls.logflag=1;
						this.rs.rsflag=1;
						console.log(this.scope.header.status);
						this.location.path("detail");
		      }
					else{
						this.ls.logflag=0;
					}
					});
		}

		
}
