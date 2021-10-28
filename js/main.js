$('.goto').click(function() {
		var el=$(this).attr('href').replace('#','');
		var offset = 0;
	$('bode, html').animate({scrollTop:$('.'+el).offset().top+offset},500, function() {});

	if($('.header-menu').hasClass('active')){
		$('.header-menu,.header-menu__icon').removeClass('active');
		$('body').removeClass('lock');
	}
	return false;
});

$(window).scroll(function(event) {
		var s = 0 - $(this).scrollTop()/2;
	$('.mainblock__image').css('transform', 'translate3d(0, '+s+'px, 0)');
})

$('.filter__item').click (function(event) {
		var i=$(this).data('filter');
	if (i ==1 ) {
		$('.portfolio__column').show();
	}else{
		$('.portfolio__column').hide();
		$('.portfolio__column.filter__'+i).show();
	}
	$('.filter__item').removeClass('active');
	$(this).addClass('active');

	return false;
})

baguetteBox.run('.gallery');

if($('.gallery').length>0) {
	baguetteBox.run('.gallery', {
		// кастомные опции
	});
}
// резиновость фуллскрина для IE:
$(window).resize(function(event) {
	mainblock();
});
function mainblock() {
	var h=$(window).outerHeight();
	$('.mainblock').css('min-height', h);
}
mainblock();

$(window).resize(function (event) {
	adaptive_function();
});
function adaptive_header(w, h) {
	var headerMenu = $('.header-menu');
	var headerLang = $('.header-top-lang');
	if (w < 767) {
		if (!headerLang.hasClass('done')) {
			headerLang.addClass('done').appendTo(headerMenu);
		}
	} else {
		if (headerLang.hasClass('done')) {
			headerLang.removeClass('done').prependTo($('.header-top'));
		}
	}
	if (w < 767) {
		if (!$('.header-bottom-menu').hasClass('done')) {
			$('.header-bottom-menu').addClass('done').appendTo(headerMenu);
		}
	} else {
		$.each($('.header-bottom-menu'), function (index, val) {
			if ($(this).hasClass('header-bottom-menu--right')) {
				if ($(this).hasClass('done')) {
					$(this).removeClass('done').prependTo($('.header-bottom__column').eq(2));
				}
			} else {
				if ($(this).hasClass('done')) {
					$(this).removeClass('done').prependTo($('.header-bottom__column').eq(0));
				}
			}
		});
	}
}

function adaptive_function() {
	var w = $(window).outerWidth();
	var h = $(window).outerHeight();
	adaptive_header(w, h);
}
adaptive_function();

$('.menu-header__icon').click(function (event) {
	$(this).toggleClass('active');
	$('.menu-header__menu').toggleClass('active');
	if ($(this).hasClass('active')) {
		$('body').data('scroll', $(window).scrollTop());
	}
	$('body').toggleClass('lock');
	if (!$(this).hasClass('active')) {
		$('body, html').scrollTop(parseInt($('body').data('scroll')));
	}
});

function ibg() {
	let ibg = document.querySelectorAll(".ibg"); for (var i = 0; i < ibg.length; i++) { if (ibg[i].querySelector('img')) { ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')'; } }
}
ibg();

$('body').on('click', '.tab__navitem', function(event) {
				var eq=$(this).index();
			if($(this).hasClass('parent')) {
				var eq=$(this).parent().index();
			}
		if(!$(this).hasClass('active')) {
			$(this).closest('.tabs').find('.tab__navitem').removeClass('active');
			$(this).addClass('active');
			$(this).closest('.tabs').find('.tab__item').removeClass('active').eq(eq).addClass('active');
		if($(this).closest('.tabs').find('.slick-slider').length>0) {
			$(this).closest('.tabs').find('.slick-slider').slick('setPosition');
		}
	}
});
$.each($('.spoller.active'), function(index, val) {
	$(this).next().show();
});
$('body').on('click', '.spoller', function(event) {
	if($(this).hasClass('mob') && !isMobile.any()) {
		return false;
	}
	if($(this).hasClass('closeall') && !$(this).hasClass('active')) {
		$.each($(this).closest('.spollers').find('.spoller'), function(index, val) {
			$(this).removeClass('active');
			$(this).next().slideUp(300);
		});
	}
	$(this).toggleClass('active').next().slideToggle(300, function(index, val) {
			if($(this).parent().find('.slick-slider').length>0) {
				$(this).parent().find('.slick-slider').slick('setPosition');
			}
	});
	return false;
});

function scrolloptions() {
	var scs=100;
	var mss=50;
	var bns=false;
if(isMobile.any()) {
	scs=10;
	mss=1;
	bns=true;
}
var opt={
	cursolrcolor: "#fff",
	cursorwidth: "4px",
	background: "",
	autohidemode: true,
	cursoropacitymax: 0.4,
	bouncescroll: bns,
	cursorborderradius: "0px",
	scrollspeed: scs,
	mousescrollstep: mss,
	directionlockdeadzone: 0,
	cursorborder: "0px solid #fff",
};
return opt;
}
function scroll() {
	$('.scroll-body').niceScroll('.scroll-list', scrolloptions());
}
if(navigator.appVersion.indexOf("Mac")!=-1){
}else{
	if($('.scroll-body').length>0){scroll();}
}