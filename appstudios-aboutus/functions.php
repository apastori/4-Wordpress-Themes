<?php

//Include custom Javascript
function add_stylecss_scriptjavascript() {
    wp_enqueue_style('sobrenosotrostyle.css', get_template_directory_uri() . '/css/sobrenosotrostyle.css');
    wp_enqueue_script('javascriptsobrenosotros', get_template_directory_uri() . '/js/javascriptsobrenosotros.js', array ('jquery'), '1.0.0', true);
}  

add_action('wp_enqueue_scripts', 'add_stylecss_scriptjavascript');

// include custom jQuery 
function shapeSpace_include_custom_jquery() {

	wp_deregister_script('jquery');
	wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js', array(), null, true);

}
add_action('wp_enqueue_scripts', 'shapeSpace_include_custom_jquery');

?>


