<html>
<head>
	<meta charset="UTF-8">
	<title>Contact | aggelosQQ Website Designer / Developer</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="author" content="aggelosQQ, Aggelos Sarrhs, Aggelos Sarris">
	<meta name="description" content="aggelosQQ is a young website designer and a front-end developer offering clean, efficient, secure and modern code.">
	<meta name="keywords" content="aggelosqq, developer, designer, web, hire, ready, cheap, efficient, modern, html, css, scss, javascript, ruby">
	<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
	<link rel="stylesheet" href="css/main.css">
	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-89878959-1', 'auto');
	  ga('send', 'pageview');
</script>
</head>
<body>
	<nav class="nav">
		<h2 class="page-brand" id="top"><a href="index.html">aggelosQQ</a></h2>
		<i class="fa fa-bars fa-fw menu show-on-mobile"></i>
		<ul class="navbar hide-on-mobile">
			<li><a href="index.html">Home</a></li>
			<li><a href="index.html#projects" id="work">Work</a></li>
			<li><a href="#" id="top">Contact</a></li>
			<li><a href="hire" class="special" id="special">Hire Me</a></li>
		</ul>
	</nav>
	<section class="contact section">
	<h1>Contact Me</h1>
	<p>Get in touch with me about anything! I can solve all your problems. <small>(even relationship issues)</small></p>

	<form method="POST" class="contact-form">
	<input type="text" name="email" placeholder="Enter your E-Mail Address.." required><br/>
	<input type="text" name="name" placeholder="Enter your name" required><br/>
	<textarea name="message" placeholder="Say Hello.." required></textarea>
	<input type="submit" value="Send" name="suubmit">
	</form>
	</section>


	<?php
		require 'PHPMailer-5.2.21/PHPMailerAutoload.php';
		$mail = new PHPMailer;

		$email = $_POST['email'];
		$name = $_POST['name'];
		$msg = $_POST['message'];
		$submit = $_POST['submit'];

		if(isset($submit)) {
			$mail->setFrom('jouflis1@hotmail.com', 'Kourkouti');
			$mail->addAddress('aggelosqq@gmail.com', 'aggelosQQ');
			$mail->Subject  = 'First PHPMailer Message';
			$mail->Body     = 'Hi! This is my first e-mail sent through PHPMailer.';
			if(!$mail->send()) {
			  echo 'Message was not sent.';
			  echo 'Mailer error: ' . $mail->ErrorInfo;
			} else {
			  echo '<h1>Message has been sent.</h1>';
			}
		}
	?>


	<p class="footer">aggelosQQ &copy; 2016 - 2017. All Rights Reserved.</p>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
	<script src="js/jquery-transit.js"></script>
	<script src="js/main.js"></script>
</body>
</html>