/*s-common.js*/
(function() {
	'use strict';

	app.service('sHeaderMenu', sHeaderMenu)
	function sHeaderMenu() {
		var stitle = 'sHeaderMenu';
		console.log('START', stitle);

		var headerMenu = {
			"name":"Menu",
			"order":1,
			"show":true,
			"icon":"flaticon-menu55",
			"path":"",
			"action":"menu"
		};
		return headerMenu;
	}
	// console.log('test sHeaderMenu:', angular.module('app').service('sHeaderMenu'));

	app.service('sHeaderSettings', sHeaderSettings)
	function sHeaderSettings() {
		var stitle = 'sHeaderSettings';
		console.log('START', stitle);

		var headerSettings = {
			"name":"Settings",
			"order":2,
			"show":false,
			"icon":"flaticon-settings49",
			"path":"clan",
			"action":"menu"
		};
		return headerSettings;
	}
	// console.log('test sHeaderSettings:', angular.module('app').service('sHeaderSettings'));

})();
