// c-loadout.js
(function() {
	'use strict';

	app.controller('cLoadout', cLoadout)
	function cLoadout($scope, $http, $route, $location) {
		$scope.ctitle = 'cLoadout';
		console.log('START', $scope.ctitle);
		$scope.title = 'Loadout';
		$scope.description = 'Loadout';

		// $scope.sLoadout = sLoadout;
		// console.log('$scope.sLoadout: ',$scope.sLoadout);

		var myLoadout = {};
		$http.get('data/todo.json')
			.success(function (data) {
				console.log('sTodo.getLoadout -- success:', data);
				myLoadout = data.loadout;
				// return myLoadout;
				$scope.loadout = myLoadout;
				// console.log('$scope.loadout', $scope.loadout);
				// console.log('$scope.loadout.description: ',$scope.loadout.description);
				// console.log('$scope.loadout.meta: ',$scope.loadout.meta);
				// console.log('$scope.loadout.meta[1]: ',$scope.loadout.meta[1]);
				// console.log('$scope.loadout.meta[1].priority: ',$scope.loadout.meta[1].priority);
			}).error(function () {
				console.log('sTodo.getLoadout -- error');
				// get backup data at /data/clan.json
				myLoadout = 'no data';
				// return myLoadout;
			});

	}
	// console.log('test cLoadout:', angular.module('app').controller('cLoadout'));

})();
