var app = angular.module("Aplicacion",["ionic"]);

app.service("NoticiasApi",["$http","$log",Noticias]);
app.controller("Aplicacion",["$scope","$log","NoticiasApi",Aplicacion]);

function Aplicacion($scope,$log,NoticiasApi) {
	$scope.posts = [];
	NoticiasApi.getNoticias($scope);
	$scope.refrescar = function () {
		NoticiasApi.getNoticias($scope);
	}
}

function Noticias($http,$log)
{
	this.getNoticias = function ($scope) {
		$http.get("https://public-api.wordpress.com/rest/v1/freshly-pressed").success(function(data){
			$scope.posts = data.posts;
		});
	}
}