/**
 * 
 */
app.service('specificationService',function($http){
	this.findSpecList=function(){
		return $http.get("../spec/list.do");
	}
	this.findPage=function(page,rows){
		return $http.get('../spec/findPage.do?page='+page+'&rows='+rows);
	}
	this.deletePs=function(ids){
		return $http.post("../spec/deletePs.do",ids);
	}
	this.findOne=function(id){
		return $http.post('../spec/findOne.do?id='+id);
	}
	this.add=function(entity){
		return $http.post('../spec/add.do',entity);
	}
	this.update=function(entity){
		return $http.post('../spec/update.do',entity);
	}
	this.getSpecList=function(){
		return $http.post('../spec/getSpecList.do');
	}
	
	
})