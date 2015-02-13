/*s-common.js*/
(function() {
	'use strict';

	app.service('sMisc', sMisc)
	function sMisc() {
		var stitle = 'sMisc';
		console.log('START', stitle);

		var dataMisc = {
			"name":"Misc"
		};
		return dataMisc;
	}
	// console.log('test sMisc:', angular.module('app').service('sMisc'));

})();
