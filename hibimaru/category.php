<?php get_header(); ?>

<div id="contents">
<!--▼コンテンツメイン-->
<div id="main">
<h1><img src="<?php bloginfo('template_url'); ?>/img/t_info.png" alt="Information" /></h1>
<?php if(have_posts()) : while(have_posts()) :the_post(); ?>
    <div class="entry_cate">
	<div class="pic"><a href="<?php the_permalink(); ?>"><img src="<?php bloginfo('template_url'); ?>/img/dmy.jpg" width="100" height="100" /></a></div>
	<div class="right">
	<p class="date"><?php the_time('Y.n.j'); ?></p>
	<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
	<?php the_excerpt(); ?>
	</div>
	<div class="clear_both"></div>
    </div>
<?php endwhile; else: ?>
<?php _e('現在更新中です'); ?>
<?php endif; ?>    
    
</div>
<!--▲コンテンツメイン-->
<?php get_sidebar(); ?>
<?php get_footer(); ?>
</div>


</div>


</body>
</html>
