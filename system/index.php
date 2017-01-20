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
		<title>SASS Project</title>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
		<link rel="stylesheet" href="css/main.css">
	</head>
	<?php include('dbconnect.php'); ?>
	<body class="body">
		<div class="logstatus">
			<?php
				if(isset($_SESSION['first']) && isset($_SESSION['last'])) {
					echo 'Welcome, ' . $_SESSION['first'] . ' ' . $_SESSION['last'] . '!';
					echo '<a data-toggle="modal" data-target="#itemModal" class="log-action additem">Add Item
								<a href="profile.php" class="log-action profile">Profile</a>
								<a href="logsys/logout.php" class="log-action logout">Log Out</a>';
						} else {
							echo 'You are not logged in!
							<span data-toggle="modal" data-target="#LoginModal" class="log-action login">Login</span>
							<p data-toggle="modal" data-target="#RegisterModal" class="log-action register">Register</p>';
						}
				?>
			</div>
			<?php
			$url = 'http://'. $_SERVER['HTTP_HOST']. $_SERVER['REQUEST_URI'];
			if (strpos($url, '?error=empty') !== false) {
				echo '<h4 class="alert error">Please fill out all the fields!</h4>';
			}
			elseif (strpos($url, '?error=username') !== false) {
				echo '<h4 class="alert error">Username already exists!</h4>';
			}
			?>
			<div class="modal fade" id="RegisterModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
							</button>
							<h4 class="modal-title" id="myModalLabel">Register</h4>
						</div>
						<div class="modal-body">
							<form action="logsys/register.php" method="POST">
								<input type="text" name="first" placeholder="First Name" class="form-control" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"><br/>
								<input type="text" name="last" placeholder="Last Name" class="form-control" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"><br/>
								<input type="text" name="uid" placeholder="Username" class="form-control" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"><br/>
								<input type="password" name="pwd" placeholder="Password" class="form-control" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"><br/>
								<button type="submit" class="btn btn-primary btn-block">Sign Up</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			
			<div class="modal fade" id="LoginModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
							</button>
							<h4 class="modal-title" id="myModalLabel">Login</h4>
						</div>
						<div class="modal-body">
							<form action="logsys/login.php" method="POST">
								<input type="text" name="uid" placeholder="Username" class="form-control" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"><br/>
								<input type="password" name="pwd" placeholder="Password" class="form-control" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"><br/>
								<button type="submit" class="btn btn-primary btn-block">Login</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div class="modal fade" id="itemModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
							</button>
							<h4 class="modal-title" id="myModalLabel">Add Item</h4>
						</div>
						<div class="modal-body">
							<form action="item/additem.php" id="additemform" method="POST">
								<input type="text" name="name" placeholder="Enter Item Name" class="form-control" max-length="25" min-length="3" required /><br/>
								Price: <input type="number" name="price" min="10" max="1000000" class="form-control" required /><br/>
								<textarea form="additemform" name="description" placeholder="Brief Description (Max. 150 words)" maxlength="150" minlength="75" class="form-control"/></textarea><br/>
								<button type="submit" class="btn btn-primary btn-block">Add Item</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div class="header">
				<div class="jumbotron text-center">
					<h1>My First Login System and Store Wannabe</h1>
					<p>Login using the buttons on top right!</p>
				</div>
			</div>
			<div class="container">
			<div class="row">
				<?php
					if (isset($_GET["page"])) { $page  = $_GET["page"]; } else { $page=1; };
					$start_from = ($page-1) * $results_per_page;
					$sql = "SELECT * FROM item ORDER BY ID ASC LIMIT $start_from, ".$results_per_page;
					$result = mysqli_query($conn, $sql);
					if($result === FALSE) {
					die(mysqli_error($conn));
					}
					while($row = mysqli_fetch_array($result)) {
							echo '<div class="col-sm-12 col-md-6 col-lg-6 text-center item">';
							echo '<h3 class="item-name">'. $row['name'] . '</h3>
								<p class="price"><strong>Price:</strong> '. $row['price'] . '<i class="fa fa-dollar"></i></p>
								<p class="item-description">'. $row['description']. '</p>
								<button type="button" class="btn btn-primary btn-block">Add to Cart</button>';
							echo '</div>';
						};
				?>

					
					</div>
				<?php 
						$sql = "SELECT COUNT(ID) AS total FROM item";
						$result = $conn->query($sql);
						$row = $result->fetch_assoc();
						$total_pages = ceil($row["total"] / $results_per_page); // calculate total pages with results
						  
						for ($i=1; $i<=$total_pages; $i++) {  // print links for all pages
						            echo "<a href='index.php?page=".$i."' class='pagination";
						            if ($i==$page) { echo " curPage'"; } else { echo "'"; }
						            echo ">".$i."</a> "; 
						}; 
					?>
				</div>

				<?php include('includes/footer.php'); ?>