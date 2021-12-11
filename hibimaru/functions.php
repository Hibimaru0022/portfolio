<?php
function my_enqueue_script() {
    wp_enqueue_style( 'style', get_template_directory_uri() . '/style.css');
    wp_enqueue_script( 'sp-menu.js', get_template_directory_uri() . '/sp-menu.js');
}
add_action( 'wp_enqueue_scripts', 'my_enqueue_script' );
// サムネイル設定
add_theme_support( 'post-thumbnails' ); 
add_image_size( 'shopthumbsmall', 110, 110, true );  
add_image_size( 'shopthumbmedium', 335, 240, true );  
add_image_size( 'newsthumbmedium', 250, 190, true ); 
add_image_size( 'newstopslide', 1100, 420, true ); 

// 抜粋の長さを変更する
function my_excerpt_more($post) {
	return '<a href="'. get_permalink($post->ID) . '">' . '…続きを読む' . '</a>';
}
add_filter('excerpt_more', 'my_excerpt_more');

//カスタム投稿月別アーカイブ
global $my_archives_post_type;
add_filter( 'getarchives_where', 'my_getarchives_where', 10, 2 );
function my_getarchives_where( $where, $r ) {
  global $my_archives_post_type;
  if ( isset($r['post_type']) ) {
    $my_archives_post_type = $r['post_type'];
    $where = str_replace( '\'post\'', '\'' . $r['post_type'] . '\'', $where );
  } else {
    $my_archives_post_type = '';
  }
  return $where;
}
add_filter( 'get_archives_link', 'my_get_archives_link' );
function my_get_archives_link( $link_html ) {
  global $my_archives_post_type;
  if ( '' != $my_archives_post_type )
    $add_link .= '?post_type=' . $my_archives_post_type;
     $link_html = preg_replace("/href=\'(.+)\'\s/","href='$1".$add_link."'",$link_html);

  return $link_html;
}
//タイトルタグを自動出力           
add_theme_support('title-tag');        

?>