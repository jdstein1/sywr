/*c-common.js*/
(function() {
	'use strict';

	app.controller('cMain', cMain)
	function cMain($scope, $log, $timeout, $mdSidenav, constMeta, constBungieUrl, constFileTypes, sMenu, sSettings, sHeaderMenu, sHeaderSettings) {
		$scope.ctitle = 'cMain';
		$scope.title = 'Main App';
		console.log('START', $scope.ctitle);

		$scope.headerMenu = sHeaderMenu;
		$scope.headerSettings = sHeaderSettings;
		$scope.menuItems = sMenu;
		$scope.settingsItems = sSettings;

		for (var i = $scope.menuItems.length - 1; i >= 0; i--) {
			console.log('$scope.menuItems[i].order decrement: ', $scope.menuItems[i].order);
			// $scope.menuItems[i].order;
		};
		for (var i = 0; i < $scope.menuItems.length; i++) {
			console.log('$scope.menuItems[i].order increment: ', $scope.menuItems[i].order);
			// $scope.menuItems[i];
		};

		$scope.toggleLeft = function() {
			$mdSidenav('left').toggle()
		};
		$scope.toggleRight = function() {
			$mdSidenav('right').toggle()
		};

	}
	// console.log('test cMain:', angular.module('app').controller('cMain'));

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
	function cMenu($scope) {
		$scope.ctitle = 'cMenu';
		$scope.title = 'Menu';
		console.log('START', $scope.ctitle);

	}
	// console.log('test cMenu:', angular.module('app').controller('cMenu'));

	app.controller('cHome', cHome)
	function cHome($scope, sDataDestiny, constMeta) {
		$scope.ctitle = 'cHome';
		$scope.title = 'Home';
		console.log('START', $scope.ctitle);

		$scope.constMeta = constMeta;

		$scope.options = [
			"name","id","date"
		];

		$scope.DataDestiny = sDataDestiny;
		console.log('$scope.DataDestiny', $scope.DataDestiny);
	}
	// console.log('test cHome:', angular.module('app').controller('cHome'));

})();
