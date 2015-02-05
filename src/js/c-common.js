/*c-common.js*/
(function() {
	'use strict';

	app.controller('cMain', cMain)
	function cMain($scope, $log, $timeout, $mdSidenav, constClan, constProtocol, constFileTypes, constBungieUrl, sHeaderMenu, sHeaderSettings) {
		$scope.ctitle = 'cMain';
		$scope.title = 'Main App';
		console.log('START', $scope.ctitle);

		$scope.constClan = constClan;
		$scope.constProtocol = constProtocol;
		$scope.constFileTypes = constFileTypes;
		$scope.constBungieUrl = constBungieUrl;

		$scope.menuHeader = sHeaderMenu;
		$scope.settingsHeader = sHeaderSettings;

		$scope.toggleLeft = function() {
			$mdSidenav('left').toggle()
		};
		$scope.toggleRight = function() {
			$mdSidenav('right').toggle()
		};

		$scope.title = constClan.title.camel;

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

	app.controller('cClan', cClan)
	function cClan($scope, constProtocol, constBungieUrl, constClan) {
		$scope.ctitle = 'cClan';
		$scope.title = 'Clan';
		console.log('START', $scope.ctitle);

		$scope.metadata = constClan;

		$scope.myClanId = "519979";
		$scope.myClanUrl = constProtocol[0] + '://' + constBungieUrl.domain + '/' + constBungieUrl.lang + '/' + constBungieUrl.clan + '/' + constBungieUrl.console + '/' + $scope.myClanId;
		console.log('$scope.myClanUrl:', $scope.myClanUrl);

	}
	// console.log('test cClan:', angular.module('app').controller('cClan'));

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

	app.controller('cMenu', cMenu)
	function cMenu($scope, sNavMenu, sNavSettings) {
		$scope.ctitle = 'cMenu';
		$scope.title = 'Menu';
		console.log('START', $scope.ctitle);

		$scope.filterNav = 'show';
		$scope.comparatorNav = true;
		$scope.orderNav = 'order';
		$scope.reverseNav = false;

		$scope.menuItems = sNavMenu;
		console.log('$scope.menuItems', $scope.menuItems);
		$scope.settingsItems = sNavSettings;
		console.log('$scope.settingsItems', $scope.settingsItems);

		for (var i = $scope.menuItems.length - 1; i >= 0; i--) {
			// console.log('$scope.menuItems[i].order decrement: ', $scope.menuItems[i].order);
			// $scope.menuItems[i].order;
		};
		for (var i = 0; i < $scope.menuItems.length; i++) {
			// console.log('$scope.menuItems[i].order increment: ', $scope.menuItems[i].order);
			// $scope.menuItems[i];
		};

	}
	// console.log('test cMenu:', angular.module('app').controller('cMenu'));

	app.controller('cHome', cHome)
	function cHome($scope, constClan) {
		$scope.ctitle = 'cHome';
		$scope.title = 'Home';
		console.log('START', $scope.ctitle);

		$scope.constClan = constClan;

		$scope.options = [
			"name","id","date"
		];
	}
	// console.log('test cHome:', angular.module('app').controller('cHome'));

})();
