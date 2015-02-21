<?php

$request =  'http://www.bungie.net/Platform/User/GetBungieNetUserById/8310647/?lc=en&fmt=true&lcin=true';
$json = file_get_contents($request);
header('Content-Type: application/json');
echo htmlspecialchars_decode($json, ENT_QUOTES);

?>
