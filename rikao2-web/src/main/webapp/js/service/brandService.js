/**
 * 
 */
app.service('brandService',function($http){
	this.findBrandList=function(){
		return $http.get("../brand/findBrandList.do");
	}
	this.findPage=function(page,rows){
		return $http.get('../brand/findPage.do?page='+page+'&rows='+rows);
	}
	this.deletePs=function(ids){
		return $http.post("../brand/deletePs.do",ids);
	}
	this.findOne=function(id){
		return $http.post('../brand/findOne.do?id='+id);
	}
	this.add=function(brand){
		return $http.post('../brand/add.do',brand);
	}
	this.update=function(brand){
		return $http.post('../brand/update.do',brand);
	}
	this.getBrandList=function(){
		return $http.post('../brand/getBrandList.do');
	}
	
})