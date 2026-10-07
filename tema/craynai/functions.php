<?php
/**
 * Crayn AI teması.
 *
 * Tasarımın tamamı app/ klasöründeki derlenmiş uygulamadır (`npm run build:wp`). Tema onu
 * sayfaya yükler ve panelden girilen içeriği window.CRAYN olarak ona verir; panelde boş
 * bırakılan her alan için uygulama onaylı içeriği gösterir.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require get_template_directory() . '/inc/tema-ayarlari.php';
require get_template_directory() . '/inc/rotalar.php';
require get_template_directory() . '/inc/uygulama.php';

function crayn_kurulum() {
	add_theme_support( 'title-tag' );
	register_nav_menus(
		array(
			'ana-menu' => 'Ana Menü (tam ekran menü)',
			'footer-1' => 'Footer — 1. sütun',
			'footer-2' => 'Footer — 2. sütun',
			'footer-3' => 'Footer — 3. sütun',
		)
	);
}
add_action( 'after_setup_theme', 'crayn_kurulum' );

// Yönetim çubuğu üstte sabit duran menünün yerini kaydırır.
add_filter( 'show_admin_bar', '__return_false' );
