/*c-common.js*/
(function() {
	'use strict';

	app.controller('cMenu', cMenu)
	function cMenu($scope, sMenuNav, sMenuSettings) {
		$scope.ctitle = 'cMenu';
		$scope.title = 'Menu';
		console.log('START', $scope.ctitle);

		$scope.filterNav = 'show';
		$scope.comparatorNav = true;
		$scope.orderNav = 'order';
		$scope.reverseNav = false;

		$scope.menuItems = sMenuNav;
		// console.log('$scope.menuItems', $scope.menuItems);
		$scope.settingsItems = sMenuSettings;
		// console.log('$scope.settingsItems', $scope.settingsItems);

		// for (var i = $scope.menuItems.length - 1; i >= 0; i--) {
			// console.log('$scope.menuItems[i].order decrement: ', $scope.menuItems[i].order);
			// $scope.menuItems[i].order;
		// };
		// for (var i = 0; i < $scope.menuItems.length; i++) {
			// console.log('$scope.menuItems[i].order increment: ', $scope.menuItems[i].order);
			// $scope.menuItems[i];
		// };

	}
	// console.log('test cMenu:', angular.module('app').controller('cMenu'));

})();
