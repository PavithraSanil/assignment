export default class detailCtrl {
	/*@ngInject;*/
	constructor(empService,$scope,$location,$routeParams,$rootScope,$localStorage) {
		console.log("Detail CONTROLLER");
    this.scope = $scope;
		this.location=$location;
		this.scope.rp=$routeParams;
		this.scope.service=empService;
		this.rootScope=$rootScope;
		this.ls=$localStorage;
		// this.ls.sflag=0;


		console.log(this.scope.service.logfunction);
		if(this.scope.service.logfunction()){
	    empService.getData().then(emp => {

			    this.scope.emp = emp.data.body;
			    console.log(this.scope.emp);
					this.scope.toselect=[];
					for(var x=0; x<this.scope.emp.length;x++)
						this.scope.toselect[x]=false;
					//console.log(this.scope.emp[0].gender);

					for (var index in this.scope.emp) {
							if(this.scope.emp[index].gender == "0" ){
								this.scope.emp[index].gender="Female";
							}
							else {
								this.scope.emp[index].gender="Male";
							}
					}
			});
		}
		else{
			this.location.path('/');
		}


  }

  deleterec(id) {
  	//this.scope.emp.splice(id, 1);
		console.log(this.scope.emp);
		for(var x in  this.scope.emp){
			// console.log(x);
			if(this.scope.emp[x].cid==id){
				var name=this.scope.emp[x].first_name;
				console.log(name);
			}
		}
		var flag=confirm('Are you sure you want to delete'+"  "+name);
		console.log(flag);
		if(flag==true){
			this.scope.service.deleteObj(id).success(res=> {
				console.log(res.status);
				if(res.status=="200"){
					console.log('One record is deleted');
					//this.location.reload();
					//setTimeout(function(){
				//    window.location.reload();
			//	},100);
				this.location.path("reload");
				}
				else {
						console.log('Failed to delete');
				}
			});
		}
	}

	update_call(id){
		this.ls.flag=1;
		this.location.path('update/'+id);
		console.log(id);
		window.scrollTo(0, 0);
	}

	create(){
		this.ls.flag=0;
		this.location.path('create');
		window.scrollTo(0, 0);
	}

	logout(){
		this.ls.logoutflag=1;
		this.location.path('/');
	}

	selectflag() {
		this.scope.sflag=1;
	//	console.log(this.ls.sflag);
	}

	toselect($index){
		this.scope.toselect[$index]=true;
	}

	toggle() {
		console.log(this.scope.toggleflag);
		if(!this.scope.toggleflag){
			for(var x=0; x<this.scope.emp.length;x++)
				this.scope.toselect[x]=true;
				this.scope.toggleflag=!this.scope.toggleflag;
		}
		else  {
			for(var x=0; x<this.scope.emp.length;x++)
				this.scope.toselect[x]=false;
				this.scope.toggleflag=!this.scope.toggleflag;
		}
	}

	deletemultipe() {
		console.log("hi;");
		for(var x=0; x<this.scope.emp.length;x++){
			if(this.scope.toselect[x]==true){
				var id=this.scope.emp[x].cid
				console.log(this.scope.emp[x].cid);
		this.scope.service.deleteObj(id).success(res=> {
			console.log(res.status);
			if(res.status=="200"){
				console.log('One record is deleted');
			this.location.path("reload");
			}
			else {
					console.log('Failed to delete');
			}
		});
		}
	}
}
}
