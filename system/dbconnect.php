<?php
error_reporting(0);
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "firstproject";
$results_per_page = 2; // number of results per page
$conn = mysqli_connect($servername, $username, $password, $dbname);

if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}