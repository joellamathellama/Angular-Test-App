'use strict';

const direct = angular.module('directives', []);

direct.directive('myDir', dirFn);

function dirFn () {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'dirTemplate.html',
		controller: controller,
		link: linker
	};
}

function controller($scope, $elementhttp://imgur.com/xYKai7c) {
	$scope.count = 0;
	$scope.add = add.bind(this, $scope);
	$scope.sub = sub.bind(this, $scope);
}

function linker (scope, elem, attr) {
	elem.bind('click', colorSwap);

	function colorSwap () {
		elem.css('background-color') === 'silver' ? elem.css('background-color', 'white') :	elem.css('background-color', 'silver');
	}
}

function add (scope) {
	scope.count += 1;
}

function sub (scope) {
	scope.count -= 1;
}
