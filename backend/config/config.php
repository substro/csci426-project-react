<?php
define('DB_HOST', 'localhost');
define('DB_USER', 'id21647230_teamsyncdb');
define('DB_PASS', 'PPAP1212PP@p');
define('DB_NAME', 'id21647230_teamsyncdb');


$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
} else {
	echo "Connected successfully";
}
