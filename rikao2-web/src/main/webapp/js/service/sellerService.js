/**
 * 
 */
app.service('sellerService',function($http){
	this.add=function(entity){
		return $http.post("../regsiter/add.do",entity);
	}
	this.wb=function(entity){
		return $http.post("../regsiter/zj.do",entity);
	}
	this.findPage=function(page,rows,entity){
		return $http.post("../seller/findPage.do?page="+page+"&rows="+rows,entity);
	}
	this.findOne=function(sellerId){
		return $http.post("../seller/findOne.do?sellerId="+sellerId);
	}
	this.updateStatus=function(sellerId,status){
		return $http.post("../seller/updateStatus.do?sellerId="+sellerId+"&status="+status);
	}
})