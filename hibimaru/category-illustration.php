<?php get_header(); ?>

<div class="content">
		<?php get_header(); ?>
		<section id="archive">
			<h2 class="category1_t">
				<span>W</span>orks
			</h2>
			<ul class="card">
				<?php
//条件を入れる
$args = array(
  'category_name' => 'Illustration',
);
?>
<?php 
// the query
$the_query = new WP_Query( $args ); ?>
<?php if ( $the_query->have_posts() ) : ?>
	<!-- pagination here -->
	<!-- the loop -->
	<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
				<li class="cardtype">
					<a href="<?php the_permalink(); ?>" class="cardtype_link">
						<p class="cardtype_img">
							<?php 
if ( has_post_thumbnail() ) { 
	the_post_thumbnail();
} 
?>
						</p>
						<div class="cardtype_info">
							<h2 class="works_title">
								<?php the_title(); ?>
							</h2>
							<a href="">
								<p class="works_category">
								<?php $posttags = get_the_tags();
								if ($posttags) {
								foreach($posttags as $tag) {
								echo $tag->name . ' ';
								}
								}
							?>
								</p>
							</a>
						</div>
					</a>
				</li>
				<?php
endwhile; 
endif;
wp_reset_postdata();
?>
			</ul>
		</section>
		<?php get_footer(); ?>