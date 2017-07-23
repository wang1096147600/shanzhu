var app=angular.module("myApp",["ngRoute"]);
app.controller("yan",function($scope,$http){
	$http.get("../data/statistics.json").success(function(data){
		console.log(data)
		$scope.shuju=data;
	})
	
		
	$(function(){		
       $("#dian").click(function(){
//		   $("#xian").css("display","block");  
		   $("#xianbox").toggle()
       })
       
       
       
  })

})