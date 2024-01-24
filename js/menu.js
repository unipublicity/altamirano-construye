$(window).on('scroll', function(){
	if ( $(window).scrollTop()){
		$('header').addClass('menu-fixed');
	} else {
		$('header').removeClass('menu-fixed');
	}
});
