/*c-common.js*/
(function() {
	'use strict';

	app.controller('cMain', cMain)
	function cMain($scope, $log, $timeout, $mdSidenav, constClan, constProtocol, constFileTypes, constBungieUrl, sHeaderMenu, sHeaderSettings) {
		$scope.ctitle = 'cMain';
		console.log('START', $scope.ctitle);

		$scope.constClan = constClan;
		$scope.title = constClan.title.plain;
		$scope.constProtocol = constProtocol;
		$scope.constFileTypes = constFileTypes;
		$scope.constBungieUrl = constBungieUrl;

		$scope.headerMenu = sHeaderMenu;
		$scope.headerSettings = sHeaderSettings;
		$scope.sidenavOpen = false;

		$scope.toggleNav = function(type,direction) {
			console.log('toggle nav', $scope.sidenavOpen);
			$scope.direction = direction;
			// $scope.sidenavOpen = !$scope.sidenavOpen;
			$mdSidenav(type).toggle();
		};

	}
	// console.log('test cTitle:', angular.module('app').controller('cTitle'));

	app.controller('cAbout', cAbout)
	function cAbout($scope) {
		$scope.ctitle = 'cAbout';
		$scope.title = 'About';
		console.log('START', $scope.ctitle);
	}
	// console.log('test cAbout:', angular.module('app').controller('cAbout'));

	app.controller('cBlog', cBlog)
	function cBlog($scope) {
		$scope.ctitle = 'cBlog';
		$scope.title = 'Blog';
		console.log('START', $scope.ctitle);
	}
	// console.log('test cBlog:', angular.module('app').controller('cBlog'));

	app.controller('cFeedback', cFeedback)
	function cFeedback($scope) {
		$scope.ctitle = 'cFeedback';
		$scope.title = 'Feedback';
		console.log('START', $scope.ctitle);

		$scope.formFeedback = {};

		$scope.submit = function () {
			console.log('START submit');
			// $scope.formFeedback = {};
		};
		$scope.reset = function () {
			console.log('START reset');
			$scope.formFeedback = {};
		};

	}
	// console.log('test cFeedback:', angular.module('app').controller('cFeedback'));

	app.controller('cTest', cTest)
	function cTest($scope) {
		$scope.ctitle = 'cTest';
		$scope.title = 'Test';
		console.log('START', $scope.ctitle);

		$scope.title1 = 'Button';
		$scope.title4 = 'Warn';
		$scope.isDisabled = true;
		$scope.googleUrl = 'http://google.com';

		$scope.data = {
			cb1: true,
			cb4: true
		};
		$scope.onChange = function(cbState){
			$scope.message = "The switch is now: " + cbState;
		};

		$scope.todos = [];
		for (var i = 0; i < 15; i++) {
			$scope.todos.push({
				face: 'unsmiley',
				done: true,
				what: "Buy groceries",
				who: "Hazel",
				notes: "See Google Keep for specific items"
			});
			$scope.todos.push({
				face: 'smiley',
				done: false,
				what: "Frame pictures",
				who: "Mary",
				notes: "See pile of posters in office..."
			});
		}
	}
	// console.log('test cTest:', angular.module('app').controller('cTest'));

	app.controller('cHome', cHome)
	function cHome($scope, constClan, constLogo) {
		$scope.ctitle = 'cHome';
		$scope.title = 'Home';
		console.log('START', $scope.ctitle);

		$scope.constClan = constClan;
		$scope.constLogo = constLogo;

		$scope.options = [
			"name","id","date"
		];
	}
	// console.log('test cHome:', angular.module('app').controller('cHome'));

})();
