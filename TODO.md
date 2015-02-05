# TODO

Things left to do in order to make this a decent protfolio piece:


## Feedback Form

#### Assigned to:  ???
#### Status: IN PROGRESS

* Make the feedback form submit the data to an email address.
* Use GDocs form?


## Build Manager

#### Assigned to:  ???
#### Status: NOT STARTED

We will soon use a build system ( [Grunt](http://gruntjs.com/) or [Gulp](http://gulpjs.com/) ) to do the following:

* Run JSHint/JSLint on scripts
* Minify JS
* Convert LessCSS to CSS


## Custom Icons

#### Assigned to:  JEFF
#### Status: NOT STARTED

Create a set of icons for specific games and their symbols for character classes, acheivements, mission types, etc.

## Better background Images

#### Assigned to:  JEFF
#### Status: NOT STARTED

Slice up the current background images so they make a more solid-colored field.

## Custom Theme

#### Assigned to:  JEFF
#### Status: NOT STARTED

Customize the basic Material Design theme to provide a unique look and feel.

## Multiple API call

#### Assigned to:  Kras & John
#### Status: NOT STARTED

Pass more than one account ID or character ID in order to populate a player/character comparison page.


## Link to Clan & Profile pages

#### Assigned to JEFF
#### Status: DONE

### Bungie/Destiny URLs

* Clan
	* [http://www.bungie.net/en/Clan/Xbox/519979](http://www.bungie.net/en/Clan/Xbox/519979)
* Member Profile
	* [http://www.bungie.net/en/Profile/254/3892477](http://www.bungie.net/en/Profile/254/3892477)

### Bungie/Destiny APIs


## Use API to populate Clan pages

#### Assigned to JEFF
#### Status: NOT STARTED

* Clan info API
	* [http://www.bungie.net/Platform/Group/519979/MembersV3/?lc=en&fmt=true&lcin=true&currentPage=1](http://www.bungie.net/Platform/Group/519979/MembersV3/?lc=en&fmt=true&lcin=true&currentPage=1)
	* [http://www.bungie.net/Platform/Group/519979/Members/?lc=en&fmt=true&lcin=true&currentPage=1](http://www.bungie.net/Platform/Group/519979/Members/?lc=en&fmt=true&lcin=true&currentPage=1)


## Use API to populate Player pages

#### Assigned to: JEFF
#### Status: DONE

* Player info API
	* [http://www.bungie.net/Platform/User/GetBungieNetUserById/8310647/?lc=en&fmt=true&lcin=true](http://www.bungie.net/Platform/User/GetBungieNetUserById/8310647/?lc=en&fmt=true&lcin=true)


## Use API to populate Activity pages

#### Assigned to Kras
#### Status: NOT STARTED

Use Activity APIs to get data like kills, hours played, activities completed.

### Bungie/Destiny Activity History APIs:

* Story
	* [http://www.bungie.net/Platform/Destiny/Stats/ActivityHistory/1/4611686018438629701/2305843009240408744/?lc=en&fmt=true&lcin=true&mode=2&count=20&page=0&definitions=true](http://www.bungie.net/Platform/Destiny/Stats/ActivityHistory/1/4611686018438629701/2305843009240408744/?lc=en&fmt=true&lcin=true&mode=2&count=20&page=0&definitions=true)
* Strike
	* [http://www.bungie.net/Platform/Destiny/Stats/ActivityHistory/1/4611686018438629701/2305843009240408744/?lc=en&fmt=true&lcin=true&mode=18&count=20&page=0&definitions=true](http://www.bungie.net/Platform/Destiny/Stats/ActivityHistory/1/4611686018438629701/2305843009240408744/?lc=en&fmt=true&lcin=true&mode=18&count=20&page=0&definitions=true)
* Raid
	* [http://www.bungie.net/Platform/Destiny/Stats/ActivityHistory/1/4611686018438629701/2305843009240408744/?lc=en&fmt=true&lcin=true&mode=4&count=20&page=0&definitions=true](http://www.bungie.net/Platform/Destiny/Stats/ActivityHistory/1/4611686018438629701/2305843009240408744/?lc=en&fmt=true&lcin=true&mode=4&count=20&page=0&definitions=true)
* Crucible & Medals
	* [http://www.bungie.net/Platform/Destiny/Stats/ActivityHistory/1/4611686018438629701/2305843009240408744/?lc=en&fmt=true&lcin=true&mode=5&count=20&page=0&definitions=true](http://www.bungie.net/Platform/Destiny/Stats/ActivityHistory/1/4611686018438629701/2305843009240408744/?lc=en&fmt=true&lcin=true&mode=5&count=20&page=0&definitions=true)
* Patrol
	* [http://www.bungie.net/Platform/Destiny/Stats/ActivityHistory/1/4611686018438629701/2305843009240408744/?lc=en&fmt=true&lcin=true&mode=6&count=20&page=0&definitions=true](http://www.bungie.net/Platform/Destiny/Stats/ActivityHistory/1/4611686018438629701/2305843009240408744/?lc=en&fmt=true&lcin=true&mode=6&count=20&page=0&definitions=true)



## Hash Converter

#### Assigned to:  Tanner
#### Status: NOT STARTED

Make a local JSON record of most common hash conversions.  For example:

	{"hashes":[
		{"classes":[
			{2271682572:"Warlock"},
			{3655393761:"Hunter"},
			{671679327:"Titan"}
		]},{"genders":[
			{83748743296:"female"},
			{78435673543:"male"}
		]}
	]}

## Item Info Lookup

#### Assigned to:  John
#### Status: NOT STARTED

Use this API to look up inventory item data:

* Item info API
	* [http://www.bungie.net/Platform/Destiny/Manifest/InventoryItem/3658182170](http://www.bungie.net/Platform/Destiny/Manifest/InventoryItem/3658182170)
