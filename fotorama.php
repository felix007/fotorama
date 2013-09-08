<?php
/**
 * @package Fotorama
 * @version 4.3.4.1
 */
/*
Plugin Name: Fotorama
Plugin URI: http://fotorama.io/
Description: Transforms standard galleries into fotoramas. Fotorama is a simple, stunning, powerful jQuery gallery. Licensed under the MIT.
Author: Artem Polikarpov
Version: 4.3.4.1
Author URI: https://github.com/artpolikarpov
*/

define('FOTORAMA_REQUIRED_JQUERY_VERSION', '1.8.0');
define('FOTORAMA_PLUGIN_URL', WP_PLUGIN_URL . '/' . dirname(plugin_basename(__FILE__)) . '/');

add_action('init', 'fotorama_scripts');
add_shortcode('gallery', 'fotorama_gallery_shortcode');

function fotorama_gallery_shortcode($atts)
{
	$atts['link'] = 'file';
	$atts['itemtag'] = 'dl';
	$atts['icontag'] = 'dt';
	$atts['captiontag'] = 'dd';
	$atts['columns'] = 0;

	$atts['size'] = 'thumbnail';
	$gallery = gallery_shortcode($atts);

	$width = array_key_exists('width', $atts) ? $atts['width'] : '';
	$height = array_key_exists('height', $atts) ? $atts['height'] : '';

	$atts['size'] = 'large';
	preg_match_all('/<img[^<>]*>/', gallery_shortcode($atts), $images);
	preg_match_all('/href=(\'|")[^"\']+(\'|")/', $gallery, $hrefs);

	for ($i = 0, $l = count($images[0]); $i < $l; $i++) {
		$image = $images[0][$i];
		preg_match('/src=(\'|")([^"\']+)(\'|")/', $image, $src);

		if (!$i) {
			if (!$width) {
				preg_match('/width=(\'|")([^"\']+)(\'|")/', $image, $width);
				$atts['width'] = $width[2];
			}

			if (!$height) {
				preg_match('/height=(\'|")([^"\']+)(\'|")/', $image, $height);
				$height = $height[2];
			}
		}

		$gallery = str_replace(preg_replace('/href=(\'|")(.*)(\'|")/', '$2', $hrefs[0][$i]), $src[2], $gallery);
	}

	$atts['auto'] = 'false';
	$atts['max-width'] = '100%';
	$atts['ratio'] = array_key_exists('ratio', $atts) ? $atts['ratio'] : $atts['width'] && $height ? $atts['width'] / $height : '';

    $data = '';
    foreach ($atts as $key => $value) {
		$data .= "data-$key='$value'";
	}

    return "<div class='fotorama--wp' $data>$gallery</div>";
}

function fotorama_scripts()
{
	// Register scripts and styles in non-admin area only.
	if (!is_admin()) {
		// Stylesheets
		wp_register_style('fotorama.css', FOTORAMA_PLUGIN_URL . 'fotorama.css');
		wp_enqueue_style('fotorama.css');

		// Scripts
		wp_register_script('fotorama.js', FOTORAMA_PLUGIN_URL . 'fotorama.js', array('jquery'));
		wp_enqueue_script('fotorama.js');

		wp_register_script('fotorama-wp.js', FOTORAMA_PLUGIN_URL . 'fotorama-wp.js');
		wp_enqueue_script('fotorama-wp.js');
	} else {
		wp_register_style('fotorama-wp.css', FOTORAMA_PLUGIN_URL . 'fotorama-wp.css');
		wp_enqueue_style('fotorama-wp.css');
	}
}

?>
