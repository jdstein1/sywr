<?php

$request =  'http://www.bungie.net/Platform/Destiny/TigerXbox/Account/4611686018429615609/';
$json = file_get_contents($request);
header('Content-Type: application/json');
echo htmlspecialchars_decode($json, ENT_QUOTES);

?>
