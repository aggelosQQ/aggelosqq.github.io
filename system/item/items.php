<?php
	session_start();
?>
<?php

include('../dbconnect.php');


$sql = "SELECT * FROM item";
$result = mysqli_query($conn, $sql);

if (!$row = $result->fetch_assoc()) {
	echo "";
} else {
	$displayItems = '<div class="col-md-3>'. $row['name'] . '<br/>' . $row['price'] . '<br/>' . $row['description'] . '</div>';
}


?>