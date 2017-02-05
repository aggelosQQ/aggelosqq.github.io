<html>
<head>
	<meta charset="UTF-8">
	<title>aggelosQQ Website Designer / Developer</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="author" content="aggelosQQ, Aggelos Sarrhs, Aggelos Sarris">
	<meta name="description" content="aggelosQQ is a young website designer and a front-end developer offering clean, efficient, secure and modern code.">
	<meta name="keywords" content="aggelosqq, developer, designer, web, hire, ready, cheap, efficient, modern, html, css, scss, javascript, ruby">
	<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
	<link rel="stylesheet" href="../css/main.css">
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
			<li><a href="../index.html" id="top">Home</a></li>
			<li><a href="../index.html#projects" id="work">Work</a></li>
			<!-- <li><a href="../contact.php">Contact</a></li> -->
			<li><a href="#!" class="special" id="special">Hire Me</a></li>
		</ul>
	</nav>
	<div class="hire">
	<?php
	$available = true;
	if($available): ?>
		<div class="available">
			<h1> I am available!</h1>
			<h4>E-mail me at <a href="mailto:aggelosqq@gmail.com">aggelosqq@gmail.com</a> I will get back to you as soon as possible for further discussion.</h4>
		</div>
	<?php else: ?>
		<div class="unavailable">
			<h1>I am not available!</h1>
			<h4>E-mail me at <a href="mailto:aggelosqq@gmail.com">aggelosqq@gmail.com</a> and we will see what can we do about that!</h4>
		</div>
	<?php endif ?>
	<a href="mailto:aggelosqq@gmail.com" class="email">Get in Touch!</a>
	</div>


	<p class="footer">aggelosQQ &copy; 2016 - 2017. All Rights Reserved.</p>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
	<script src="../js/jquery-transit.js"></script>
	<script src="../js/main.js"></script>
	</body>
	</html>