<?php

//Include custom Javascript
function add_stylecss_scriptjavascript() {
    wp_enqueue_style('appstudios-home-style', get_template_directory_uri() . '/css/appstudios-home-style.css');
    wp_enqueue_script('functions', get_template_directory_uri() . '/js/functions.js', array ('jquery'), '1.0.0', true);
    wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js', array(), null, true);
}  

add_action('wp_enqueue_scripts', 'add_stylecss_scriptjavascript');

// include custom jQuery
function shapeSpace_include_custom_jquery() {

	wp_deregister_script('jquery');
	wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js', array(), null, true);

}
add_action('wp_enqueue_scripts', 'shapeSpace_include_custom_jquery');

?>


