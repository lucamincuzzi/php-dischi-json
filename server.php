<?php 
$dischi_json = file_get_contents("dischi.json");

header("Content-Type: application/json");
echo $dischi_json;
?>