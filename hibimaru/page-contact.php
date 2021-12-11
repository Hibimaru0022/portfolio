<!doctype html>
<html>
<head>
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/style.css">
<link href="https://fonts.googleapis.com/css?family=Fredoka+One" rel="stylesheet">
<meta charset="UTF-8">
<title>Hibimaru</title>
</head>
<body>
	<div class="content">
		<?php get_header(); ?>
    <h2 class="about_t">
        <span>Contact</span>
      </h2>
		<div class="form">
			
			 <?php if(have_posts()) : while(have_posts()) :the_post(); ?>
        <?php the_content(); ?>
    <?php endwhile; else: ?>
    <?php _e('現在更新中です'); ?>
    <?php endif; ?>
  </div>

<?php get_footer(); ?>

