export default class updateCtrl {
	/*@ngInject;*/
	constructor($scope,$location,$http,empService, $routeParams, $rootScope, $localStorage) {
		console.log("VIEW CONTROLLER");
    this.scope=$scope;
		this.http=$http;
		this.location=$location;
		this.emp=empService;
    this.rp=$routeParams;
		this.rs=$rootScope;
		this.ls=$localStorage;
		if(this.ls.logflag){
		this.scope.flag=this.ls.flag;
		console.log(this.rp.id);
		if(this.emp.logfunction()){
	    this.emp.getEmp(this.rp.id).then(res => {
				console.log("data",res.data.body);
	      if(res.data.body.gender=="0"){
	        res.data.body.gender="Female";
	      }
	      else{
	        res.data.body.gender="Male";
	      }
				this.scope.emp = res.data.body;

		  });
	}
}
else{
	this.location.path('/');
}
	}

    updateData(){
        if(this.scope.emp.gender=="Female"){
          this.scope.emp.gender="0";
        }
				else{
	        this.scope.emp.gender="1";
	      }
				this.emp.updateEmpData(this.scope.emp.cid, this.scope.emp.first_name, this.scope.emp.last_name, this.scope.emp.gender, this.scope.emp.designation, this.scope.emp.description).success(res=>{
					console.log(res);
					if(res.status==200){
		        console.log('Successfully Updated');
						console.log(res.status);
						console.log(this.scope.emp.last_name);
						this.location.path("detail");
		      }
					});
		}

		createData(){
			console.log("dfdsfs"+this.scope.emp.gender);
			if(this.scope.emp.gender=="Female"){
				this.scope.emp.gender="0";

			}
			else{
				this.scope.emp.gender="1";
			}
			this.emp.createEmpData(this.scope.emp.first_name, this.scope.emp.last_name, this.scope.emp.gender, this.scope.emp.designation, this.scope.emp.description).success(res=>{
				console.log("hdfjk"+this.scope.emp.gender);
				if(res.status==200){
					console.log('Successfully created');
					console.log(res.status);
					//console.log(this.scope.emp.last_name);
					this.location.path("detail");
				}
			});
		}
	}
