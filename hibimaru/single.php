<?php get_header(); ?>
<section id="single">
			<div class="work">
				<div class="project_info">
					<h2 class="title">
						<?php the_title(); ?>
					</h2>
					<p class="tag">
						<?php $posttags = get_the_tags();
								if ($posttags) {
								foreach($posttags as $tag) {
								echo $tag->name . ' ';
								}
								}
							?>
					</p>
				</div>
				<div class="photo">
					<?php if(have_posts()) : while(have_posts()) :the_post(); ?>
<?php the_content(); ?>
<?php endwhile; else: ?>
<?php _e('現在更新中です'); ?>
<?php endif; ?>
				</div>
			<ul class="paging">
					<?php if (get_previous_post()):?>
				    <li class="prev">
				    	<span><?php previous_post_link('%link','Previous',TRUE); ?></span>
				    </li>
					<?php endif; ?>
					<?php if (get_next_post()):?>
				    <li class="next">
				    	<span><?php next_post_link('%link','Next',TRUE); ?></span>
				    </li>
					<?php endif; ?>
			</ul>
			</div>
</section>
<?php get_footer(); ?>