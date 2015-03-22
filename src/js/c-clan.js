/*c-clan.js*/
(function() {
	'use strict';

	app.controller('cClan', cClan)
	function cClan($scope, $http, constProtocol, constBungieUrl, constClan) {
		$scope.ctitle = 'cClan';
		$scope.title = 'Clan';
		console.log('START', $scope.ctitle);

		$scope.constClan = constClan;
		$scope.myClanUrl = constProtocol[0] + '://' + constBungieUrl.domain + '/' + constBungieUrl.lang + '/' + constBungieUrl.clan + '/' + constBungieUrl.console + '/' + $scope.constClan.id;
		console.log('$scope.myClanUrl:', $scope.myClanUrl);

		$scope.convertId = function (id) {
			console.log('START convertId id: ',id);
			switch (id) {
				case '8310647':
					var name = 'Jeff';
					break;
				case '7037048':
					var name = 'John';
					break;
				case '7666141':
					var name = 'Kras';
					break;
				case '8162353':
					var name = 'Vikas';
					break;
				case '3892477':
					var name = 'Tanner';
					break;
				case '9856625':
					var name = 'Kaleb';
					break;
				default:
					var name = 'unknown';
					break;
			}
			console.log('convertId name: ',name);
			return name;
		};

		// $scope.sClan = sClan;
	    // $scope.dataClan = sClan.getClan();

		// var callClan = function () {
		// 	console.log('START callClan()');
		// 	// $scope.sClan.getClan();
		// 	$scope.sClan.getClan(function (data) {
		// 		console.log('data 1:', data);
		// 		console.log('$scope.dataClan 1:', $scope.dataClan);
		// 		$scope.dataClan = data;
		// 		return $scope.dataClan;
		// 	});
		// 	console.log('$scope.dataClan 2:', $scope.dataClan);
		// 	// console.log('$scope.sClan.getClan():', $scope.sClan.getClan());
		// };
		// callClan();

		$http.get('api/clan.php')
			.success(function (data) {
			console.log('sPlayerDetail.getMember -- success');
			console.log('data: ', data);

			// moment.locale('en-ca');

			// 2015-02-09T19:19:25.37Z -- bungie date format
			// YYYY-MM-DDTHH:mm:ssZ -- moment.js default format
			// dddd, MMMM Do YYYY, h:mm:ss a -- pretty date format
			// dddd, MMMM Do YYYY, HH:mm:ss ZZ -- JDS date format

			// var nowPretty = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
			// console.log('nowPretty ---- '+ nowPretty);

			// var nowSimple = moment().format();
			// console.log('nowSimple ---- '+ nowSimple);

			// var nowISO = moment().toISOString();
			// console.log('nowISO ---- '+ nowISO);

			// var nowISO2 = moment().add(moment().utcOffset()/60,'hours').format();
			// console.log('nowISO2 ---- '+ nowISO2);

			// console.log('UTC offset ---- '+ moment().utcOffset());
			// console.log('UTC offset hours ---- '+ moment().utcOffset()/60);

			for (var i = data.Response.results.length - 1; i >= 0; i--) {

				// // convert First acces date using .split():
				// var newFirstAccess = data.Response.results[i].user.firstAccess.split('T');
				// // console.log('newFirstAccess: ',newFirstAccess);
				// data.Response.results[i].user.firstAccess = newFirstAccess;

				// // convert Last Update date using .split():
				// var newLastUpdate = data.Response.results[i].user.lastUpdate.split('T');
				// // console.log('newLastUpdate: ',newLastUpdate);
				// data.Response.results[i].user.lastUpdate = newLastUpdate;

				// $scope.convertDate = function (glob) {
				// 	var arr = glob.split('T');
				// 	console.log('arr: ',arr);
				// };

				data.Response.results[i].user.name = $scope.convertId(data.Response.results[i].membershipId);
				data.Response.results[i].user.api = $scope.convertId(data.Response.results[i].membershipId).toLowerCase();

				// convert APPROVAL date using moment.js:
				data.Response.results[i].approvalDateISO = moment(data.Response.results[i].approvalDate).toISOString();
				data.Response.results[i].approvalDatePretty = moment(data.Response.results[i].approvalDate).format('MMM Do YYYY');
				// data.Response.results[i].approvalDatePretty = moment(data.Response.results[i].approvalDate).format('dddd, MMMM Do YYYY, HH:mm:ss ZZ');

				// convert FIRST ACCESS date using moment.js:
				data.Response.results[i].user.firstAccessISO = moment(data.Response.results[i].user.firstAccess).toISOString();
				data.Response.results[i].user.firstAccessPretty = moment(data.Response.results[i].user.firstAccess).format('MMM Do YYYY');
				// data.Response.results[i].user.firstAccessPretty = moment(data.Response.results[i].user.firstAccess).format('dddd, MMMM Do YYYY, HH:mm:ss ZZ');

				// convert LAST UPDATE date using moment.js:
				data.Response.results[i].user.firstAccessISO = moment(data.Response.results[i].user.lastUpdate).toISOString();
				data.Response.results[i].user.lastUpdatePretty = moment(data.Response.results[i].user.lastUpdate).format('MMM Do YYYY');
				// data.Response.results[i].user.lastUpdatePretty = moment(data.Response.results[i].user.lastUpdate).format('dddd, MMMM Do YYYY, HH:mm:ss ZZ');

			};

			$scope.dataClan = data.Response.results;
			console.log('$scope.dataClan: ', $scope.dataClan);
		}).error(function () {
			console.log('sPlayerDetail.getMember -- error');
			$scope.dataClan = 'no data';
			console.log('$scope.dataClan: ', $scope.dataClan);
		});

	}
	// console.log('test cClan:', angular.module('app').controller('cClan'));

})();
