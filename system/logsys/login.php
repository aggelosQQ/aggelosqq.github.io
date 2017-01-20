<?php
	session_start();
?>
<?php
include('../dbconnect.php');

$uid = $_POST['uid'];
$pwd = $_POST['pwd'];

if(empty($uid)) {
	header("Location: ../index.php?error=empty");
	exit();
}

if(empty($pwd)) {
	header("Location: ../index.php?error=empty");
	exit();
}

$sql = "SELECT * FROM user WHERE uid='$uid' AND password='$pwd'";
$result = mysqli_query($conn, $sql);

if (!$row = $result->fetch_assoc()) {
	echo "";
} else {
	$_SESSION['first'] = $row['first'];
	$_SESSION['last'] = $row['last'];
	$_SESSION['uid'] = $row['uid'];
	$_SESSION['pwd'] = $row['password'];
}

header('Location: ../index.php');

?>