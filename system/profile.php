<?php
	session_start();
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags always come first -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title><?php 
    if(isset($_SESSION['first'])) {
    	echo $_SESSION['first'] . "'s Profile";
    } else {
    	echo 'No Access';
    }
     ?></title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/main.css">
  </head>
  <body class="body">

  <div class="logstatus">
  <?php
	if(isset($_SESSION['first']) && isset($_SESSION['last'])) {
		echo 'Welcome, ' . $_SESSION['first'] . ' ' . $_SESSION['last'] . '!';
		echo '<a href="index.php" class="log-action home">Home</a> 
			  <a href="logout.php" class="log-action logout">Log Out</a>';
	} else {
		echo 'Not logged in.';
	}

?>
  </div>





  <div class="content">
  <?php
  if(!isset($_SESSION['first']) && !isset($_SESSION['last']) && !isset($_SESSION['uid']) && !isset($_SESSION['pwd'])) {
  ?>

  	<div class="no-access container"><h1>You must be logged in in order to view this page.</h1><a href="index.php" style="font-size: 1.6em;">Return to index</a></div>';


  	<?php
  } else { ?>

<div class="container profile-wall">
<h1>Welcome, <div class="full-name"><?php echo $_SESSION['first'] . ' ' . $_SESSION['last']; ?></h1>

<!-- <img src="images/avatar-default.png" class="img-responsive img-rounded img-thumbnail avatar" width="150px" alt="<?php // echo $_SESSION['first']; ?>'s Avatar" /> -->
<div class="row">
	<div class="col-md-6 col-sm-12 col-lg-6">
<div class="input-group">
	<span class="input-group-addon">First</span>
	<input type="text" class="form-control" value="<?php echo $_SESSION['first']; ?>" disabled/>
	</div>
	</div>
<div class="col-md-6 col-sm-12 col-lg-6">
<div class="input-group">
	<span class="input-group-addon">Last</span>
	<input type="text" class="form-control" value="<?php echo $_SESSION['last']; ?>" disabled/>
	</div>
	</div>
<div class="col-md-6 col-sm-12 col-lg-6">
<div class="input-group">
	<span class="input-group-addon">Username</span>
	<input type="text" class="form-control" value="<?php echo $_SESSION['uid']; ?>" disabled/>
	</div>
	</div>
<div class="col-md-6 col-sm-12 col-lg-6">
<!-- <div class="input-group">
	<span class="input-group-addon">Password</span>
	<input type="password" class="form-control password" value="<?php // echo $_SESSION['pwd']; ?>" disabled/>
	<span class="input-group-addon"><i class="fa fa-eye toggle-visibility"></i></span>
	</div>
	</div> -->
  <?php
  }
  ?>





  </div>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="js/main.js"></script>
</body>
</html>



