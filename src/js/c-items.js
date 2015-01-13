/*c-items.js*/
(function() {
	'use strict';

	app.controller('cItems', cItems)
	function cItems($scope, $http, $route, $location, constProtocol, constBungieUrl, sDataItems) {
		$scope.ctitle = 'cItems';
		$scope.title = 'Items';
		console.log('START', $scope.ctitle);

		// http://www.bungie.net/platform/Destiny/Manifest/InventoryItem/3658182170/

		$scope.sortClass = {};
		$scope.sortClass.name = "def";
		$scope.sortClass.handle = "def";
		$scope.sortClass.id = "def";
		console.log('$scope.sortClass: ', $scope.sortClass);

  		console.log('$route.current.params',$route.current.params );
		$scope.item = $route.current.params.item;

		$scope.sortOrder = '-name';
		$scope.reverse = false;

		if ($scope.sortOrder) {
			console.log('$scope.sortOrder');
		} else {
			console.log('$scope.sortOrder');
		}

		$scope.sortOrderToggle = function (type) {
			console.log('sortOrderToggle:', type +'; type:'+ $scope.sortClass[type]);

			// for (var i = 0; i < $scope.sortClass.length; i++) {
			// console.log('$scope.sortClass[i]: ', $scope.sortClass[i]);
			// $scope.sortClass[i] = 'def';
			// };

			if (type === 'all') {
				$scope.sortClass = {name: "def", handle: "def", id: "def"};
			} else {
				if ($scope.sortClass[type] === 'des') {
					$scope.sortClass[type] = 'asc';
				} else {
					$scope.sortClass[type] = 'des';
				}
			}
			$scope.reverse=!$scope.reverse;
			console.log('$scope.sortClass: ', $scope.sortClass);
		};

		$scope.myItemData = sDataItems;
		// console.log('$scope.myItemData: ', $scope.myItemData);
		// console.log('$scope.myItemData[1]: ', $scope.myItemData[1]);

		for (var i = 0; i < $scope.myItemData.length; i++) {
			var myMemberUrl = constProtocol[0] + '://' + constBungieUrl.domain +'/'+ constBungieUrl.lang +'/'+ constBungieUrl.profile + '/254/' + $scope.myItemData[i].id;
			// console.log('myMemberUrl: ', myMemberUrl);
			$scope.myItemData[i].url = myMemberUrl;
		};
		// console.log('$scope.myItemData: ', $scope.myItemData);

		// $http.get('api2.php')
		$http.get('items/'+$scope.item+'.php')
			.success(function (data) {
			console.log('sDataItemDetails.getMember -- success');
			$scope.details = data.Response.data;
		}).error(function () {
			console.log('sDataItemDetails.getMember -- error');
			$scope.details = 'no data';
		});

		// $scope.details = sDataItemDetails;
		// $scope.details = sDataItemDetails.getMember();
		console.log('$scope.details: ', $scope.details);
		// console.log('$scope.details[1]: ', $scope.details[1]);

	}
	// console.log('test cItems:', angular.module('app').controller('cItems'));

})();
