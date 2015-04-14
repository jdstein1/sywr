<?php

// Activity History APIs:
// * Story (mode=2)
// * Strike (mode=18)
// * Raid (mode=4)
// * Crucible & Medals (mode=5)
// * Patrol (mode=6)

$request = 'http://www.bungie.net/Platform/Destiny/Stats/ActivityHistory/1/'+membershipId+'/'+characterId+'/?lc=en&fmt=true&lcin=true&mode='+mode+'&count=20&page=0&definitions=true';
$json = file_get_contents($request);
header('Content-Type: application/json');
echo htmlspecialchars_decode($json, ENT_QUOTES);

?>
