// c-players.js
(function() {
	'use strict';

	app.directive('dPlayers', dPlayers)

	function dPlayers() {

		return {
			restrict:'AE',
			replace:true,
			transclude:true,
			scope:'=', // sortOrderChoice & sortReverse are connected, NO items
			// scope:{
			// 	items:'=' // sortOrderChoice & sortReverse are NOT connected, YES items
			// },
			// scope:{
				// items:'='
			// 	sortOrderChoice:'=',
			// 	sortReverse:'=',
			// 	sortClear:'&',
			// 	sortOrderToggle2:'&'
			// },
			// link: function (scope, element, attrs) {
                // scope.dataClan = sPlayerDetail.getMember;
            // },
			// controller: function ($scope) {
			// 	console.log('$scope: ', $scope);
			// 	$scope.sortOrderChoice = 'name';
			// 	$scope.sortReverse = '';
			// 	$scope.sortClear = '';
			// 	$scope.sortOrderToggle2 = '';
			// },
			// template: '<md-card ng-repeat="item in dataClan"><md-card-content>user: {{item.user}}</md-card-content></md-card>'
			// templateUrl: 'tmpl/t-players.html'
			// templateUrl: 'tmpl/t-players-basic.html'
			// templateUrl: 'tmpl/t-players-simple.html'
			templateUrl: 'tmpl/t-players-pretty.html'
			// templateUrl: 'tmpl/t-players-all.html'
		};

	}
	// console.log('test dPlayers:', angular.module('app').directive('dPlayers'));

})();
