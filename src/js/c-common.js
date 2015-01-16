/*c-common.js*/
(function() {
	'use strict';

	app.controller('cMain', cMain)
	function cMain($scope, $log, $timeout, $mdSidenav, constMeta, constBungieUrl, constFileTypes, sMenu, sSettings) {
		$scope.ctitle = 'cMain';
		$scope.title = 'Main App';
		console.log('START', $scope.ctitle);

		$scope.menuItems = sMenu;
		$scope.settingsItems = sSettings;

		$scope.toggleLeft = function() {
			$mdSidenav('left').toggle()
		};
		$scope.toggleRight = function() {
			$mdSidenav('right').toggle()
		};

$scope.getImgPath = function (type,id) {
	console.log('START getImgPath');
	var urlBase = constBungieUrl.protocol[0] + '://' + constBungieUrl.domain + '/';
	switch (type) {
		case 'avatar':
			var urlPath = 'img/profile/avatars/';
			break;
		case 'background':
			var urlPath = 'img/UserThemes/';
			break;
		default:
			var urlPath = 'img/';
			break;
	}
	return urlBase + urlPath + imgPath;
};

$scope.getCharBackgroundPath = function (id) {
	console.log('START getCharBackgroundPath');
	var path = constBungieUrl.protocol[0] + '://' + constBungieUrl.domain + '/';
	return path;
};
$scope.getCharEmblemPath = function (id) {
	console.log('START getCharEmblemPath');
	var path = constBungieUrl.protocol[0] + '://' + constBungieUrl.domain + '/';
	return path;
};
$scope.getCharAvatarPath = function (id) {
	console.log('START getCharAvatarPath');
	var path = constBungieUrl.protocol[0] + '://' + constBungieUrl.domain + '/';
	return path;
};

$scope.getPlayerBackgroundPath = function (id) {
	console.log('START getPlayerBackgroundPath');
	var path = constBungieUrl.protocol[0] + '://' + constBungieUrl.domain + '/';
	return path;
};
$scope.getPlayerEmblemPath = function (id) {
	console.log('START getPlayerEmblemPath');
	var path = constBungieUrl.protocol[0] + '://' + constBungieUrl.domain + '/';
	return path;
};

	}
	// console.log('test cMain:', angular.module('app').controller('cMain'));

	app.controller('cFeedback', cFeedback)
	function cFeedback($scope) {
		$scope.ctitle = 'cFeedback';
		$scope.title = 'Feedback';
		console.log('START', $scope.ctitle);

	}
	// console.log('test cFeedback:', angular.module('app').controller('cFeedback'));

	app.controller('cTest', cTest)
	function cTest($scope) {
		$scope.ctitle = 'cTest';
		$scope.title = 'Home';
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

		$scope.menuItems = [{
			"name":"Home",
			"path":"",
			"action":"menu"
		},{
			"name":"Players",
			"path":"members",
			"action":"menu"
		},{
			"name":"Games",
			"path":"games",
			"action":"menu"
		},{
			"name":"Feedback",
			"path":"feedback",
			"action":"menu"
		}];

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
