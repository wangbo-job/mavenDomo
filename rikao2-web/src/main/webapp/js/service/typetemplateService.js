/**
 * 
 */
app.service('typetemplateService',function($http){
	this.findSpecList=function(){
		return $http.get("../typetemplate/list.do");
	}
	this.findPage=function(page,rows){
		return $http.get('../typetemplate/findPage.do?page='+page+'&rows='+rows);
	}
	this.deletePs=function(ids){
		return $http.post("../typetemplate/deletePs.do",ids);
	}
	this.findOne=function(id){
		return $http.post('../typetemplate/findOne.do?id='+id);
	}
	this.add=function(entity){
		return $http.post('../typetemplate/add.do',entity);
	}
	this.update=function(entity){
		return $http.post('../typetemplate/update.do',entity);
	}
	this.realUpdate=function(){
		return $http.post('../typetemplate/realUpdate.do');
	}
	
	
})