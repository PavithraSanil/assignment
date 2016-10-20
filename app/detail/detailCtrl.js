export default class detailCtrl {
	/*@ngInject;*/
	constructor(empService,$scope,$location,$routeParams,$rootScope,$localStorage,$timeout,$interval) {
		console.log("Detail CONTROLLER");
    this.scope = $scope;
		this.location=$location;
		this.scope.rp=$routeParams;
		this.scope.service=empService;
		this.rootScope=$rootScope;
		this.ls=$localStorage;
		this.timeout=$timeout;
		this.interval=$interval;
		// this.ls.sflag=0;
		this.scope.id=[];

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
					//this.scope.emp[index].toselect=false;
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
			var count=0;
			for(var x=0; x<this.scope.emp.length;x++){
				if(this.scope.toselect[x]==true)
				count+=1;
			}
			var flag=confirm('You have selected '+count+' items to delete and it will remove in 5 seconds after clicking confirm!!');
			if(flag==true){
				var ar=[];
					for(var x=0; x<this.scope.emp.length;x++){
							if(this.scope.toselect[x]==true){
									ar.push(this.scope.emp[x].cid);

							}
					}
					console.log(ar);
					var i=0;
					var myTimer =this.interval(()=>{
						 var j=i++;
						 console.log(j);
						if(ar[j]){
							this.scope.service.deleteObj(ar[j]).success(res=> {
							console.log("hi",ar[j]);
							if(res.status=="200"){
								console.log('One record is deleted');
								this.location.path("reload");

							}
							else {
								console.log('Failed to delete');
							}

							});

						}else if(!ar[j]){
						 //console.log(!ar[j]);
						 clearInterval(myTimer);
						//this.scope.on('$destroy', ()=> { this.interval.cancel(myTimer); });
						 }

					 }, 5000)

				}


	}
}
