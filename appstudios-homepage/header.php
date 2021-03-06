<!--This is the header.php file -->
<!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="A">
	<meta name="author" content="App studio">

	<title>Home - App Studios</title>

	<!-- CSS Font Awesome -->
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

	<!-- CSS Google Fonts -->
	<link href="https://fonts.googleapis.com/css?family=Great+Vibes" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Fjalla+One|Roboto" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Damion|Yellowtail" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Play" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Alegreya" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Cinzel" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Vollkorn" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Audiowide" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">

	<!-- Links for Bootstrap and JQuery because the navbar needs them -->

	<!-- JQuery -->
	<script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>

	<!-- CSS de Bootstrap -->
	<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- JS de Bootstrap -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

	<!-- CSS Propio -->
    <!--<link rel="stylesheet" href="<?php //echo get_bloginfo('template_directory');?>/appstudios-home-style.css">-->
    <?php wp_head(); ?>
</head>

<body>
        <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
	        <div class="container-fluid">
	            <div class="navbar-header">
				    <button type="button" class="navbar-toggle collapsed" id="button-collapse" data-toggle="collapse" data-target="#navbar-collapse-main">
					    <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
				    <img id="small-logo" src="<?php echo get_template_directory_uri() . '/resources/LOGO-Final-Recortado-En-Negro.jpg';?>" width="50" height="50">
			        <a id="navbar-title" href="AppStudio Version 1.html">AppStudios</a>
				</div>
				<div class="navbar-collapse collapse" id="navbar-collapse-main">
	                 <ul class="nav navbar-nav navbar-right">
	                    <li><a class="link-3" href="http://localhost:8888/wordpress/home/">Inicio</a></li>
	                    <li><a class="link-3" href="http://localhost:8888/wordpress/about-us/">Quiénes somos</a></li>
	                    <li><a class="link-3" href="http://localhost:8888/wordpress/services/">Servicios</a></li>
					    <li><a class="link-3" href="http://localhost:8888/wordpress/contact-page/">Contacto</a></li>
					    <li><a id="language-button" class="link-3" href="#">Idioma</a></li>
					 </ul>
                </div> <!-- closing collapse navbar -->
	        </div> <!-- closing Container Fluid -->
        </nav> <!--closing navbar -->
		
		
