'use strict';

const ctrl = angular.module('testRoller', []);

ctrl.controller('testCtrl', ['$scope', hello]);

function hello ($scope) {
	console.log("hello from fn controller", $scope);
}
