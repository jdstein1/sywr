/*s-sorting.js*/
(function() {
	'use strict';

	app.service('sSortingTodo', sSortingTodo)
	function sSortingTodo() {
		var stitle = 'sSortingTodo';
		console.log('START', stitle);

		var sortOptionsTodo = [{
				'type':'assignee',
				'tag':'assignee',
				'class':'',
				'def':true,
				'asc':false,
				'des':false
			},{
				'type':'status',
				'tag':'status',
				'class':'',
				'def':true,
				'asc':false,
				'des':false
			},{
				'type':'priority',
				'tag':'priority',
				'class':'',
				'def':true,
				'asc':false,
				'des':false
			}];
		return sortOptionsTodo;

	}
	// console.log('test sSortingTodo:', angular.module('app').service('sSortingTodo'));

	app.service('sSortingMisc', sSortingMisc)
	function sSortingMisc() {
		var stitle = 'sSortingMisc';
		console.log('START', stitle);

		var sortOptionsMisc = [{
				'type':'player',
				'tag':'player',
				'class':'',
				'def':true,
				'asc':false,
				'des':false
			},{
				'type':'charclass',
				'tag':'charclass',
				'class':'',
				'def':true,
				'asc':false,
				'des':false
			},{
				'type':'level',
				'tag':'level',
				'class':'',
				'def':true,
				'asc':false,
				'des':false
			}];
		return sortOptionsMisc;

	}
	// console.log('test sSortingMisc:', angular.module('app').service('sSortingMisc'));

	app.service('sSortingPlayers', sSortingPlayers)
	function sSortingPlayers() {
		var stitle = 'sSortingPlayers';
		console.log('START', stitle);

		var sortOptionsPlayers = [{
				'type':'name',
				'tag':'name',
				'class':'',
				'def':true,
				'asc':false,
				'des':false
			},{
				'type':'handle',
				'tag':'handle',
				'class':'',
				'def':true,
				'asc':false,
				'des':false
			},{
				'type':'id.profile',
				'tag':'id',
				'class':'',
				'def':true,
				'asc':false,
				'des':false
			},{
				'type':'rank',
				'tag':'status',
				'class':'',
				'def':true,
				'asc':false,
				'des':false
			}];
		return sortOptionsPlayers;

	}
	// console.log('test sSortingPlayers:', angular.module('app').service('sSortingPlayers'));

	app.service('sSortingClan', sSortingClan)
	function sSortingClan() {
		var stitle = 'sSortingClan';
		console.log('START', stitle);

		var sortOptionsPlayers = [{
			// 	'type':'user.name',
			// 	'tag':'Name',
			// 	'class':'',
			// 	'def':true,
			// 	'asc':false,
			// 	'des':false
			// },{
				'type':'user.xboxDisplayName',
				'tag':'Gamer tag',
				'class':'',
				'def':true,
				'asc':false,
				'des':false
			},{
				'type':'membershipId',
				'tag':'ID',
				'class':'',
				'def':true,
				'asc':false,
				'des':false
			}];
		return sortOptionsPlayers;

	}
	// console.log('test sSortingClan:', angular.module('app').service('sSortingClan'));

	app.service('sSorting', sSorting)
	function sSorting() {
		var stitle = 'sSorting';
		console.log('START', stitle);

		var sortOptionsGroup = {
			'todo':[{
				'type':'assignee',
				'tag':'assignee',
				'class':'',
				'def':true,
				'asc':false,
				'des':false
			},{
				'type':'status',
				'tag':'status',
				'class':'',
				'def':true,
				'asc':false,
				'des':false
			},{
				'type':'priority',
				'tag':'priority',
				'class':'',
				'def':true,
				'asc':false,
				'des':false
			}],
			'players':[{
				'type':'name',
				'tag':'name',
				'class':'',
				'def':true,
				'asc':false,
				'des':false
			},{
				'type':'rank',
				'tag':'status',
				'class':'',
				'def':true,
				'asc':false,
				'des':false
			},{
				'type':'handle',
				'tag':'handle',
				'class':'',
				'def':true,
				'asc':false,
				'des':false
			},{
				'type':'id',
				'tag':'id',
				'class':'',
				'def':true,
				'asc':false,
				'des':false
			}],
			'other':[{
				'type':'assignee',
				'tag':'assignee',
				'class':'',
				'def':true,
				'asc':false,
				'des':false
			}]
		};
		return sortOptionsGroup;

	}
	// console.log('test sSorting:', angular.module('app').service('sSorting'));

})();
