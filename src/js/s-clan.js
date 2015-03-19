/*s-members.js*/
(function() {
	'use strict';

	app.service('sClan', sClan)
	function sClan($http) {
		var stitle = 'sClan';
		console.log('START', stitle);

		this.getClan = function() {
		// return {
		// 	get: function() {
var myDataInner = {};
var myDataOuter = {};
$http.get('api/clan.php')
	.success(function (data) {
		console.log('sClan.getClan SUCCESS -- data.Response.results: ',data.Response.results);
		var myDataInner = data.Response.results;
		console.log('sClan.getClan SUCCESS -- myDataInner: ',myDataInner);
		return myDataInner;
	}).error(function () {
		console.log('sClan.getClan ERROR',data.Response.results);
		// get backup data at /data/clan.json
	});
			// }
		console.log('sClan.getClan -- myDataInner: ',myDataInner);
			myDataOuter = myDataInner;
		console.log('sClan.getClan -- myDataOuter: ',myDataOuter);
			return myDataOuter;
		}

		// var myClanId = 519979, myData = {};
		// this.getClan = function() {
		// 	$http.get('api/clan.php')
		// 		.success(function (data) {
		// 			console.log('sClan.getClan -- success -- data.Response.results: ',data.Response.results);
		// 			var myData = data.Response.results;
		// 			console.log('sClan.getClan -- success -- myData: ',myData);
		// 			return myData;
		// 		}).error(function () {
		// 			console.log('sClan.getClan -- error',data.Response.results);
		// 			// get backup data at /data/clan.json
		// 			var myData = 'no data';
		// 			return myData;
		// 		});
		// 	// return myData;
		// };

		// console.log('sClan', sClan);
		// return sClan;
		// return myData;
		// console.log('myData', myData);

	}
	// console.log('test sClan:', angular.module('app').service('sClan'));

})();
