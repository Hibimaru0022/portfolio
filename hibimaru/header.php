<!doctype html>
<html>
<head>
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/style.css">
<link href="https://fonts.googleapis.com/css?family=Fredoka+One" rel="stylesheet">
<script src="<?php echo get_template_directory_uri(); ?>/https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<title>Hibimaru</title>
<?php wp_head(); ?>
</head>
<body>
	<div class="content">
<div class="mainvisual">
			<header id="PageHeader">
				<h1 id="logo">
					<a href="https://hibimaru.com">
						<img src="<?php bloginfo('template_url'); ?>/images/logo.svg" width="260px">
					</a>
				</h1>
				<nav id="globalNavigation">
					<div id="sp-icon" class="sp-open">
                		<span></span>
            		</div>
					<ul id="menu">
						<li class="navi"><a href="<?php bloginfo('url'); ?>">Home</a>
						</li>
						<li class="navi"><a href="<?php bloginfo('url'); ?>/illustration">Works</a>
						</li>
						<li class="navi"><a href="<?php bloginfo('url'); ?>/about">About</a>
						</li>
						<li class="navi"><a href="<?php bloginfo('url'); ?>/contact">Contact</a>
						</li>
					</ul>
					<ul id="sp-menu">
						<li class="navi"><a href="<?php bloginfo('url'); ?>">Home</a>
						</li>
						<li class="navi"><a href="<?php bloginfo('url'); ?>/character">Works</a>
						</li>
						<li class="navi"><a href="<?php bloginfo('url'); ?>/about">About</a>
						</li>
						<li class="navi"><a href="<?php bloginfo('url'); ?>/contact">Contact</a>
						</li>
					</ul>
					<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
					<script src="<?php echo get_template_directory_uri(); ?>/js/sp-menu.js"></script>
				</nav>
			</header>
</div>