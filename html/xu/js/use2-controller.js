var app=angular.module("myApp",[]);
app.controller("yan",function($scope,$http){
	$http.get("../data/use2.json").success(function(data){
		console.log(data)
		$scope.shuju=data;
	})
})