		<?php get_header(); ?>
		<section id="archive">
			<h2 class="category2_t">
				<span>W</span>orks
			</h2>
			<ul class="card">
			<?php
//条件を入れる
$args = array(
  'category_name' => 'Illustration',
  'posts_per_page' => 16
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
			<a href="<?php bloginfo('url'); ?>/illustration">
				<div class="more">
					<span>more</span>
				</div>
			</a>
		</section>
		<section class="contact">
				<h2 class="contact_t">
					<span>CONTACT</span>
				</h2>
				<div class="information">
					<h3 class="contact_copy">
						Please contact me</br>for anything
					</h3>	
					<div class="contact_info">
						<h2>
							<img src="<?php bloginfo('template_url'); ?>/images/hibimaru_phone.svg">
						</h2>
						<dl>
							<dt class="e-mail">
								E-mail
							</dt>
							<dd>
								info@hibimaru.com
							</dd>
						</dl>
						<dl>
							<dt class="telephone">
								Telephone
							</dt>
							<dd>
								080-8630-3146
							</dd>
						</dl>
						<div class="submit_bt">
							<a href="<?php bloginfo('url'); ?>/contact">
								<span>submit</span>
							</a>
						</div>
					</div>
				</div>
				<div class="imgbox">
					<p>
						<img src="<?php bloginfo('template_url'); ?>/images/run.png">
					</p>
				</div>
		</section>
		<?php get_footer(); ?>
	</div>
</body>
</html>
