/**
 * 
 */
app.controller('indexController',function($scope,$controller,loginService){
	
	
	//点击删除进行删除
	$scope.getUserName=function(){
		loginService.getUserName().success(
      			  function(a){
          			$scope.userName=a.userName;
          		  }	  
      	  )
	}
	
	
	
})