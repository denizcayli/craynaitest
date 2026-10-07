<?php
/**
 * Derlenmiş uygulamayı sayfaya yükler ve panelden gelen veriyi ona verir.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Derlemenin dosya listesi: karma adlı JS ve CSS dosyalarının yolları buradan okunur.
function crayn_giris_dosyasi() {
	$dosya = get_template_directory() . '/app/manifest.json';
	if ( ! file_exists( $dosya ) ) {
		return array();
	}
	$liste = json_decode( file_get_contents( $dosya ), true );
	if ( ! is_array( $liste ) ) {
		return array();
	}
	foreach ( $liste as $kayit ) {
		if ( ! empty( $kayit['isEntry'] ) ) {
			return $kayit;
		}
	}
	return array();
}

function crayn_menu_ogeleri( $konum ) {
	$konumlar = get_nav_menu_locations();
	if ( empty( $konumlar[ $konum ] ) ) {
		return array();
	}
	$ogeler = wp_get_nav_menu_items( $konumlar[ $konum ] );
	if ( ! $ogeler ) {
		return array();
	}
	$liste = array();
	foreach ( $ogeler as $oge ) {
		$liste[] = array(
			'label' => wp_specialchars_decode( $oge->title, ENT_QUOTES ),
			'href'  => $oge->url,
		);
	}
	return $liste;
}

// Footer sütunları: sütun başlığı, o konuma atanan menünün adıdır.
function crayn_footer_menuleri() {
	$konumlar = get_nav_menu_locations();
	$sutunlar = array();
	foreach ( array( 'footer-1', 'footer-2', 'footer-3' ) as $konum ) {
		$ogeler = crayn_menu_ogeleri( $konum );
		if ( ! $ogeler ) {
			continue;
		}
		$menu       = wp_get_nav_menu_object( $konumlar[ $konum ] );
		$sutunlar[] = array(
			'title' => $menu ? $menu->name : '',
			'links' => $ogeler,
		);
	}
	return $sutunlar;
}

function crayn_veri() {
	$yol = wp_parse_url( home_url( '/' ), PHP_URL_PATH );

	return array(
		'base'   => untrailingslashit( $yol ? $yol : '' ),
		'assets' => get_template_directory_uri() . '/app',
		'site'   => array(
			'email'      => crayn_ayar( 'email' ),
			'phone'      => crayn_ayar( 'telefon' ),
			'address'    => crayn_ayar( 'adres' ),
			'footerText' => crayn_ayar( 'footer_metin' ),
			'copyright'  => crayn_ayar( 'telif' ),
			'footerNote' => crayn_ayar( 'footer_not' ),
			'menuNote'   => crayn_ayar( 'menu_not' ),
			'instagram'  => crayn_ayar( 'instagram' ),
			'x'          => crayn_ayar( 'x' ),
			'linkedin'   => crayn_ayar( 'linkedin' ),
		),
		'menus'  => array(
			'main'   => crayn_menu_ogeleri( 'ana-menu' ),
			'footer' => crayn_footer_menuleri(),
		),
	);
}

function crayn_basa_ekle() {
	$aciklama = crayn_ayar( 'aciklama' );
	if ( ! $aciklama ) {
		$aciklama = "Crayn AI, modern işletmeler için özel AI agent'lar, otomasyon sistemleri ve ölçeklenebilir üretken yapay zeka yazılımları geliştiren yerli bir yazılım şirketidir.";
	}
	$uygulama = get_template_directory_uri() . '/app';
	?>
	<meta name="description" content="<?php echo esc_attr( $aciklama ); ?>" />
	<link rel="icon" type="image/png" href="<?php echo esc_url( $uygulama . '/assets/brand/crayn-icon.png' ); ?>" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<script>window.CRAYN = <?php echo wp_json_encode( crayn_veri(), JSON_HEX_TAG | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE ); ?>;</script>
	<?php
}
add_action( 'wp_head', 'crayn_basa_ekle', 1 );

function crayn_dosyalari_yukle() {
	// Blok editörünün ön yüz stilleri tasarıma karışmasın.
	wp_dequeue_style( 'wp-block-library' );
	wp_dequeue_style( 'global-styles' );
	wp_dequeue_style( 'classic-theme-styles' );

	wp_enqueue_style( 'crayn-font', 'https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap', array(), null );

	$giris    = crayn_giris_dosyasi();
	$uygulama = get_template_directory_uri() . '/app/';
	if ( empty( $giris['file'] ) ) {
		return;
	}
	if ( ! empty( $giris['css'] ) ) {
		foreach ( $giris['css'] as $sira => $css ) {
			wp_enqueue_style( 'crayn-app-' . $sira, $uygulama . $css, array(), null );
		}
	}
	wp_enqueue_script_module( 'crayn-app', $uygulama . $giris['file'], array(), null );
}
add_action( 'wp_enqueue_scripts', 'crayn_dosyalari_yukle', 100 );

// Ana sayfanın sekme başlığı.
function crayn_sayfa_basligi( $baslik ) {
	if ( ! is_front_page() && ! is_home() ) {
		return $baslik;
	}
	$ayar = crayn_ayar( 'baslik' );
	return $ayar ? $ayar : 'Crayn AI | Şirketlere Özel Üretken Yapay Zeka Yazılımları';
}
add_filter( 'pre_get_document_title', 'crayn_sayfa_basligi' );
