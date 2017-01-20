<?php
session_start();
include('../dbconnect.php');

$name = $_POST['name'];
$price = $_POST['price'];
$description = $_POST['description'];


if(empty($name)) {
	header("Location: ../index.php?error=empty");
	exit();
}

if(empty($price)) {
	header("Location: ../index.php?error=empty");
	exit();
}

if(empty($description)) {
	header("Location: ../index.php?error=empty");
	exit();
}

$sql = "INSERT INTO item (name, price, description) VALUES ('$name', '$price', '$description')";

$result = mysqli_query($conn, $sql) or die("Insert failed. " . mysqli_error($conn));

header("Location: ../index.php");