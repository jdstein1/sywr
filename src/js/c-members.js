// c-members.js
(function() {
	'use strict';

	app.controller('cMembers', cMembers)
	function cMembers($scope, $http, $route, $location, constProtocol, constBungieUrl, sMembers) {
		$scope.ctitle = 'cMembers';
		$scope.title = 'Players';
		console.log('START', $scope.ctitle);

		console.log('constProtocol', constProtocol);
		console.log('constBungieUrl', constBungieUrl);

		// var myEmblemUrl = constProtocol[0] + '://' + constBungieUrl.domain +'/'+ constBungieUrl.lang +'/'+ constBungieUrl.profile + '/' + $scope.itemHash;
		// console.log('myEmblemUrl: ', myEmblemUrl);

		$scope.bungieImgPath = constProtocol[0] + '://' + constBungieUrl.domain;

		$scope.sortOptions = {};
		// $scope.sortOptions = [
		// 	{
		// 		'type':'name',
		// 		'class':'def'
		// 	},{
		// 		'type':'handle',
		// 		'class':'des'
		// 	},{
		// 		'type':'id',
		// 		'class':'asc'
		// 	}
		// ];
		$scope.sortOrderChoice = "name";
		$scope.sortOptions = [
			{
				'type':'name',
				'tag':'name',
				'class':'',
				'asc':false,
				'des':false
			},
			{
				'type':'handle',
				'tag':'handle',
				'class':'',
				'asc':false,
				'des':false
			},
			{
				'type':'id',
				'tag':'account id',
				'class':'',
				'asc':false,
				'des':false
			}
		];
		// $scope.sortOrderChoice = "";
		// $scope.sortOptions.name = {};
		// $scope.sortOptions.handle = {};
		// $scope.sortOptions.id = {};
		// $scope.sortOptions.name.type = "name";
		// $scope.sortOptions.handle.type = "handle";
		// $scope.sortOptions.id.type = "id";
		// $scope.sortOptions.name.asc = 1;
		// $scope.sortOptions.handle.asc = 1;
		// $scope.sortOptions.id.asc = 1;
		// $scope.sortOptions.name.des = 0;
		// $scope.sortOptions.handle.des = 0;
		// $scope.sortOptions.id.des = 0;
		// $scope.sortOptions.name.tag = "Name";
		// $scope.sortOptions.handle.tag = "Handle";
		// $scope.sortOptions.id.tag = "ID";
		// $scope.sortOptions.name.class = "";
		// $scope.sortOptions.handle.class = "";
		// $scope.sortOptions.id.class = "";
		console.log('$scope.sortOptions:', $scope.sortOptions);
		console.log('$scope.sortOptions.length:', $scope.sortOptions.length);
		// console.log('$scope.sortOptions.name:', $scope.sortOptions.name);

		$scope.sortClass = {};
		$scope.sortClass.asc = "flaticon-drop25";
		$scope.sortClass.des = "flaticon-drop27";
		$scope.sortClass.name = "def";
		$scope.sortClass.handle = "def";
		$scope.sortClass.id = "def";
		console.log('$scope.sortClass: ', $scope.sortClass);

		$scope.sortOrder = '-name';
		$scope.sortReverse = 0;

		// if ($scope.sortOrder) {
		// 	console.log('$scope.sortOrder');
		// } else {
		// 	console.log('$scope.sortOrder');
		// }

		$scope.sortOrderToggle = function (type) {
			console.log('sortOrderToggle:', type +'; type:'+ $scope.sortClass[i]);
			if (type === 'all') {
				$scope.sortClass = {name: "def", handle: "def", id: "def"};
			} else {
				if ($scope.sortClass[i] === 'des') {
					$scope.sortClass[i] = 'asc';
				} else {
					$scope.sortClass[i] = 'des';
				}
			}
			$scope.sortReverse=!$scope.sortReverse;
			// console.log('$scope.sortClass: ', $scope.sortClass);
		};

		var fDescending = function (type) {
			console.log('fDescending: ', type+' and '+$scope.sortOptions[i].asc);
			$scope.sortOptions[i].class = 'des';
			$scope.sortOptions[i].asc = !$scope.sortOptions[i].asc;
		};
		var fAscending = function (type) {
			console.log('fAscending: ', type);
			$scope.sortOptions[i].class = 'asc';
			$scope.sortOptions[i].asc = !$scope.sortOptions[i].asc;
		};

		$scope.sortClear = function () {
			console.log('sortClear');
			console.log('$scope.sortOptions: ', $scope.sortOptions);
			console.log('$scope.sortOptions.length: ', $scope.sortOptions.length);
			// console.log('$scope.sortOptions.name.length: ', $scope.sortOptions.name.length);
			$scope.sortOrderChoice = "";
			$scope.sortReverse = false;
			for (var i = 0; i < $scope.sortOptions.length; i++) {
				console.log('$scope.sortOptions[i]: ', $scope.sortOptions[i]);
				$scope.sortOptions[i].asc = false;
				$scope.sortOptions[i].des = false;					
			};
		};

		$scope.sortOrderToggle2 = function (type, i) {
			console.log('sortOrderToggle2:', type);
			if ($scope.sortOptions[i].asc === $scope.sortOptions[i].des) {
				console.log('sortOrderToggle2:', type +'; both off or on.  sort in ascending.');
				$scope.sortOrderChoice = type;
				$scope.sortOptions[i].asc = !$scope.sortOptions[i].asc;
			} else {
				console.log('sortOrderToggle2:', type +'; flip asc & des.');
				console.log('$scope.sortOptions[i].asc: ', $scope.sortOptions[i].asc);
				console.log('$scope.sortOptions[i].des: ', $scope.sortOptions[i].des);
				$scope.sortOrderChoice = type;
				$scope.sortOptions[i].asc = !$scope.sortOptions[i].asc;
				$scope.sortOptions[i].des = !$scope.sortOptions[i].des;
				// $scope.sortOptions[i].asc ? fDescending(type) : fAscending(type);
				// if ($scope.sortOptions[i].class === 'des') {
				// 	$scope.sortOptions[i].class = 'asc';
				// } else if ($scope.sortOptions[i].class === 'asc') {
				// 	$scope.sortOptions[i].class = 'des';
				// } else {
				// 	$scope.sortOptions[i].class = "def";						
				// }
			}
			$scope.sortReverse=!$scope.sortReverse;
			// console.log('$scope.sortOptions[i].class: ', $scope.sortOptions[i].class);
		};

		$scope.members = sMembers;
		// console.log('$scope.members: ', $scope.members);
		// console.log('$scope.members[1]: ', $scope.members[1]);

		for (var i = 0; i < $scope.members.length; i++) {
			var myMemberUrl = constProtocol[0] + '://' + constBungieUrl.domain +'/'+ constBungieUrl.lang +'/'+ constBungieUrl.profile + '/254/' + $scope.members[i].id;
			// console.log('myMemberUrl: ', myMemberUrl);
			$scope.members[i].url = myMemberUrl;
		};
		// console.log('$scope.members: ', $scope.members);

		$scope.getPlayerBackgroundPath = function (id) {
			console.log('START getPlayerBackgroundPath');
			// http://www.bungie.net/img/UserThemes/Destiny1/header.jpg
			// http://www.bungie.net/img/UserThemes/Destiny3/header.jpg
			var path = constBungieUrl.protocol[0] + '://' + constBungieUrl.domain + '/';
			return path;
		};
		$scope.getPlayerAvatarPath = function (id) {
			console.log('START getPlayerAvatarPath');
			// http://www.bungie.net/img/profile/avatars/bungieday_13.jpg
			// http://www.bungie.net/img/profile/avatars/bungieday_10.jpg
			var path = constBungieUrl.protocol[0] + '://' + constBungieUrl.domain + '/';
			return path;
		};

	}
	// console.log('test cMembers:', angular.module('app').controller('cMembers'));

})();
