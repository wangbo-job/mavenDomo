/**
 * 
 */
app.controller('sellerController',function($scope,$controller,sellerService){
	$controller('baseController',{$scope:$scope});
	
	//添加或者修改
	$scope.add =function(){
		sellerService.add($scope.entity).success(
				function(a){ 
					if(a.flag){
						location.href='shoplogin.html';
					} 
				}			
		);
	}
	//回現
	$scope.findOne =function(sellerId){
		sellerService.findOne(sellerId).success(
				function(a){ 
					$scope.entity=a;
				}			
		);
	}
	//修改狀態
	$scope.updateStatus =function(sellerId,status){
		sellerService.updateStatus(sellerId,status).success(
				function(a){ 
					if(a){
						alert(a.magess);
						$scope.reloadList();
					}else{
						alert(a.magess);
						
					}
				}			
		);
	}
	
	//列表
	$scope.searchEntity={};
	
	$scope.findPage=function(page,rows){
		sellerService.findPage(page,rows,$scope.searchEntity).success(
		        function(a){
		        	console.log(a);
		        $scope.sellerList=a.rows;
		        $scope.paginationConf.totalItems=a.total;//更新总记录数
		        }		
		 )
	}
})