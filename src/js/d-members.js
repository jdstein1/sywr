// c-members.js
(function() {
	'use strict';

	app.directive('dMembers', dMembers)
	function dMembers() {

		return {
			restrict:'AE',
			// replace:true,
			// transclude:true,
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
			templateUrl: 'tmpl/t-members.html'
		};

	}
	// console.log('test dMembers:', angular.module('app').directive('dMembers'));

})();
