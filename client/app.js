'use strict';

const app = angular.module('myApp', ['ngRoute', 'testRoller', 'directives']);

app.config(['$routeProvider', router]);

function router ($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'testCtrl',
			templateUrl: 'test.html'
		})
}