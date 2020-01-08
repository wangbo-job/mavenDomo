/**
 * 
 */
app.controller('typetemplateController',function($scope,$controller,typetemplateService,brandService,specificationService){
	$controller('baseController',{$scope:$scope});//继承	

	
	//分页
	$scope.findPage=function(page,rows){	
		typetemplateService.findPage(page,rows).success(
				function(response){
					$scope.typeTemplate=response.rows;	
					$scope.paginationConf.totalItems=response.total;//更新总记录数
				}			
		);
	}
	
	//查询品牌列表的数据把品牌名字键name改为text(因为我们用了select2的插件)
	//select2插件类型是一个数组，而数据取得是数组中的datal;
	$scope.getBrandList=function(){
		brandService.getBrandList().success(
		     function(a){
		    	 $scope.brandList={data:a};
		     }		
		 )
	}
	
	//查询规格列表的数据把规格名字键name改为text(因为我们用了select2的插件)
	//select2插件类型是一个数组，而数据取得是数组中的datal;
	$scope.specList={data:[]};
	$scope.getSpecList=function(){
		specificationService.getSpecList().success(
				function(a){
					$scope.specList={data:a};
				}		
		)
	}
	//给加一个对象把entity变为自己组装的一个组装类
	$scope.addTableRow=function(){
		$scope.entity.customAttributeItems.push({});
	}
	//给加一个对象把entity变为自己组装的一个组装类
	$scope.deleteTableRow=function(index){
		$scope.entity.customAttributeItems.splice(index,1);
	}
	
	//根据id查询一个对象
	$scope.findOne=function(id){
		typetemplateService.findOne(id).success(
		      function(a){
		    	  console.log(a);
		    	  $scope.entity=a;
		    	  $scope.entity.brandIds=  JSON.parse($scope.entity.brandIds);//转换品牌列表
					$scope.entity.specIds=  JSON.parse($scope.entity.specIds);//转换规格列表
					$scope.entity.customAttributeItems= JSON.parse($scope.entity.customAttributeItems);//转换扩展属性
		      }		
		 )
	}
	
	//添加
	//添加规格and修改
	$scope.save=function(){
		var wb=typetemplateService.add($scope.entity);
		if($scope.entity.id!=null){
			wb=typetemplateService.update($scope.entity);
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
	//拼接
	$scope.jsonToString=function(jsonString,key){
		var json=JSON.parse(jsonString);//将json字符串转换为json对象
		var value="";
		for(var i=0;i<json.length;i++){		
			if(i>0){
				value+="," 
			}
			value+=json[i][key];			
		}
		return value;
	}
	
	
	
})