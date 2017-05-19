var paintingApp = angular.module('paintingApp', [
	'ngRoute',
	'paintingControllers',
	'paintingsFactory',
	'paintingDirective']);

paintingApp.config(function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl:"./views/Paintinglist.html",
			controller: 'PaintingListCtrl'
		})
		.when('/:paintingTitle',{
			templateUrl:"./views/Paintingdetail.html",
			controller: 'PaintingDetailCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
});

// paintingApp.factory('paintings', function($http){

// 	var cachedData;

// 	function getData(callback){
// 		if(cachedData){
// 			callback(cachedData);
// 		}else{
// 			$http.get('/js/paintings.json').success(function(data){
// 				cached = data;
// 				callback(data)
// 			})
// 		}
// 	}

// 	return{
// 		list: getData,
// 		find: function(title, callback){
// 			getData(function(data){
// 				var painting = data.filter(function(entry){
// 					return entry.title === title;
// 				})[0];
// 				callback(painting)
// 			});
// 		}
// 	}
// });

// paintingApp.controller('PaintingListCtrl', function($scope, paintings){
// 	paintings.list(function(paintings){
// 		$scope.paintings = paintings;
// 	})
// })

// paintingApp.controller('PaintingDetailCtrl', function($scope, $routeParams, paintings){
// 	paintings.find($routeParams.paintingTitle, function(painting){
// 		$scope.painting = painting;
// 	})
// })

