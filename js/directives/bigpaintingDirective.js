angular.module('bigPaintingDirective', [])
		.directive('bigpainting', function(){
	return{
		scope: { bigPainting: '='},
		restrict: 'A',
		templateUrl: '/views/bigpainting.html',
		controller: function($scope, paintings){
			paintings.find($scope.bigpainting.id, function(bigpainting){
				$scope.src = bigpainting.src
			})
		}
	}
		})	
