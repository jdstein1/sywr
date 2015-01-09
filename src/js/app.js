// (function() {
// 	'use strict';

	var app = angular.module('app', [
		'ngRoute', 'ngResource'
		])

	app.config(['$routeProvider', function ($routeProvider) {
			$routeProvider.
				when('/', {templateUrl: 'views/home.html', controller: 'cMain'}).
				when('/blog', {templateUrl: 'views/blog.html', controller: 'cBlog'}).
				when('/clan', {templateUrl: 'views/clan.html', controller: 'cClan'}).
				when('/members', {templateUrl: 'views/members.html', controller: 'cMembers'}).
				when('/members/:name', {templateUrl: 'views/members/member.html', controller: 'cMembers'}).
				when('/games', {templateUrl: 'views/games.html', controller: 'cGames'}).
				when('/games/destiny', {templateUrl: 'views/games/destiny.html', controller: 'cGamesDestiny'}).
				otherwise({redirectTo: '/'});
		}
	]);
	// console.log('test app:', angular.module('app'));

	app.service('sDataDestiny', sDataDestiny)
	function sDataDestiny() {
		var title = 'sDataDestiny';
		console.log('START', title);

		var DataDestiny = ['test1', 'test2', 'test3']

		return DataDestiny;
	}
	// console.log('test sDataDestiny:', angular.module('app').service('sDataDestiny'));

	app.service('sDataDestiny', sDataDestiny)
	function sDataDestiny() {
		var title = 'sDataDestiny';
		console.log('START', title);

		var DataDestiny = ['test1', 'test2', 'test3']

		return DataDestiny;
	}
	// console.log('test sDataDestiny:', angular.module('app').service('sDataDestiny'));

	app.controller('cMain', cMain)
	function cMain($scope, sDataDestiny) {
		$scope.title = 'cMain';
		console.log('START', $scope.title);

		$scope.DataDestiny = sDataDestiny;
		console.log('$scope.DataDestiny', $scope.DataDestiny);

		$scope.bungie = {
		"protocol": ["http","https"],
		"domain":"www.bungie.net",
		"lang":"en",
		"clan":"Clan",
		"platform":"Xbox",
		"profile":"Profile"
		};
		console.log('$scope.bungie:', $scope.bungie);
		console.log('$scope.bungie.domain:', $scope.bungie.domain);
		console.log('$scope.bungie.protocol:', $scope.bungie.protocol);
		console.log('$scope.bungie.protocol[1]:', $scope.bungie.protocol[1]);

		$scope.myClanId = "519979";
		$scope.myClanUrl = $scope.bungie.protocol[0] + '://' + $scope.bungie.domain + '/' + $scope.bungie.lang + '/' + $scope.bungie.clan + '/' + $scope.bungie.platform + '/' + $scope.myClanId;
		console.log('$scope.myClanUrl:', $scope.myClanUrl);

		$scope.myMemberData = [{
		"id":"8310647",
		"name":"Jeff"
			},{
		"id":"7037048",
		"name":"John"
			},{
		"id":"7666141",
		"name":"Kras"
			},{
		"id":"3892477",
		"name":"Tanner"
			}];

		console.log('$scope.myMemberData: ', $scope.myMemberData);

		for (var i = 0; i < $scope.myMemberData.length; i++) {
			$scope.myMemberUrl = $scope.bungie.protocol[0] + '://' + $scope.bungie.domain + $scope.bungie.lang + $scope.bungie.profile + '254/' + $scope.myMemberData[i].id;
			console.log('$scope.myMemberUrl: ', $scope.myMemberUrl + ', name: ' + $scope.myMemberData[i].name);
		};
	}
	// console.log('test cMain:', angular.module('app').controller('cMain'));

// })();
