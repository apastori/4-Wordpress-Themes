<?php

//Include custom Javascript
function add_stylecss_scriptjavascript() {
    wp_enqueue_style('serviciosfinalstyle', get_template_directory_uri() . '/css/serviciosfinalstyle.css');
	wp_enqueue_script('javascriptserviciosfinal', get_template_directory_uri() . '/js/javascriptserviciosfinal.js', array ('jquery'), '1.0.0', true);
	wp_localize_script('javascriptserviciosfinal', 'wptheme', array( 'themeDirectory' => get_template_directory_uri() )
  );
}  

add_action('wp_enqueue_scripts', 'add_stylecss_scriptjavascript');

// include custom jQuery
function shapeSpace_include_custom_jquery() {

	wp_deregister_script('jquery');
    wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js', array(), null, true);

}
add_action('wp_enqueue_scripts', 'shapeSpace_include_custom_jquery');

?>

<?php 

// Register Custom Navigation Walker
//require_once get_template_directory() . '/class-wp-bootstrap-navwalker.php';

// To find out whether the library is recognised
//if ( ! file_exists( get_template_directory() . '/class-wp-bootstrap-navwalker.php' ) ) {
	// file does not exist... return an error.
	//return new WP_Error( 'class-wp-bootstrap-navwalker-missing', __( 'It appears the class-wp-bootstrap-navwalker.php file may be missing.', 'wp-bootstrap-navwalker' ) );
//} else {
	// file exists... require it.
	//require_once get_template_directory() . '/class-wp-bootstrap-navwalker.php';
//}

?>



