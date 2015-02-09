<?php

$request =  'http://www.bungie.net/Platform/Group/519979/MembersV3/?lc=en&fmt=true&lcin=true&currentPage=1';
$json = file_get_contents($request);
header('Content-Type: application/json');
echo htmlspecialchars_decode($json, ENT_QUOTES);

?>
