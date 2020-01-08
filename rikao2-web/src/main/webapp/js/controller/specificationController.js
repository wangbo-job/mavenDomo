/**
 * 
 */
app.controller('specificationController',function($scope,$controller,specificationService){
	$controller('baseController',{$scope:$scope});//继承	

	//查询一个
	$scope.findSpecList=function(){
		specificationService.findSpecList().success(
   			  function(a){
       			  $scope.specList=a;
       		  }	  
   	  )
	}
	
	//分页
	$scope.findPage=function(page,rows){	
		specificationService.findPage(page,rows).success(
				function(response){
					$scope.specList=response.rows;	
					$scope.paginationConf.totalItems=response.total;//更新总记录数
				}			
		);
	}
	
	
	//给加一个对象把entity变为自己组装的一个组装类
	$scope.addTableRow=function(){
		$scope.entity.specificationOptionList.push({});
	}
	//给加一个对象把entity变为自己组装的一个组装类
	$scope.deleteTableRow=function(index){
		$scope.entity.specificationOptionList.splice(index,1);
	}
	
	//添加规格
	$scope.save=function(){
		var wb=specificationService.add($scope.entity);
		if($scope.entity.specification.id!=null){
			wb=specificationService.update($scope.entity);
		}
		wb.success(
				function(a){ 
					if(a.flag){
						alert(a.magess);
						$scope.reloadList();
					}else{
						alert(a.magess);
					}
				}	
	     )
	}
	
	//回现
	$scope.findOne=function(id){
		specificationService.findOne(id).success(
		      function(a){
		    	  $scope.entity=a;
		      }		
		)
	}
	
	//删除
	$scope.deletePs=function(){
		specificationService.deletePs($scope.ids).success(
		       function(a){
		    	   if(a.flag){
		    		   alert(a.magess);
		    	   }else{
		    		   alert(a.magess);
		    	   }
		       }		
		)
	}
	
	
	
	
})