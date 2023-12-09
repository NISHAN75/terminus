(function ($) {
	$(document).ready(function () {
		// intro loader
		$(".intro-image").owlCarousel({
			items: 1,
			autoplay: true,
			autoplayTimeout: 1000,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			onTranslated: function (event) {
				var visibleItemsLastIndex = event.page.count - 1;
				if (event.item.index == visibleItemsLastIndex) {
					reachEnd();
				}
			}
		});
		function reachEnd() {
			$(".loading").delay(1000).fadeOut("slow");
		}

		// Sub menu Drop down
		$(".offcanvas-nav li a").click(function (e) {
			e.preventDefault();
			var subMenu = $(this).next("ul");
			if (subMenu.length > 0) {
				if (subMenu.is(":visible")) {
					subMenu.slideUp("fast");
					subMenu.parent().removeClass("active");
				} else {
					$(this).parent().siblings().find("ul").slideUp("fast");
					$(this).parent().siblings().find("ul").parent().removeClass("active");
					subMenu.slideDown("fast");
					subMenu.parent().addClass("active");
				}
				e.stopPropagation();
			}
		});





		// Client Logo
		$(".client-logos").owlCarousel({
			loop: true,
			autoplay: true,
			autoplayTimeout: 1600,
			autoplaySpeed: 1600,
			slideTransition: "linear",
			dots: false,
			mouseDrag: false,
			touchDrag: false,
			pullDrag: false,
			responsive: {
				0: {
					items: 2,
				},
				576: {
					items: 3,
				},
				768: {
					items: 4,
				},
				992: {
					items: 5,
				},
				1200: {
					items: 6,
				},
			},
		});
		// Wow JS
		new WOW().init();
		// Marquee text
		$(".text-slider").owlCarousel({
			items: 1,
			loop: true,
			autoplay: true,
			mouseDrag: false,
			touchDrag: false,
			autoWidth: true,
			pullDrag: false,
			autoplayTimeout: 10000,
			autoplaySpeed: 10000,
			dots: false,
		});
		// section-wrap-slider
		$('.section-wrap-slider').owlCarousel({
			loop:true,
			margin:10,
			items:1,
			nav:false,
			dots:true,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplaySpeed: 3000,
		});
		// Featured Project Slider
		$(".featured-project__items").owlCarousel({
			items: 1,
			loop: false,
			rewind: true,
			autoplayTimeout: 2500,
			slideTransition: "linear",
			autoplayHoverPause: true,
			margin: 24,
			nav: true,
			navText: ['<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 16L9.41 14.59L3.83 9L16 9L16 7L3.83 7L9.41 1.41L8 -6.99382e-07L6.99382e-07 8L8 16Z" fill="white"/></svg>', '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="white"/></svg>'],
			mouseDrag: false,
		});
		// Featured Project Slider
		$(".customer-testimonial-items").owlCarousel({
			items: 2,
			loop: false,
			rewind: true,
			autoplayTimeout: 2500,
			slideTransition: "linear",
			autoplayHoverPause: true,
			margin: 30,
			nav: true,
			navText: ['<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 16L9.41 14.59L3.83 9L16 9L16 7L3.83 7L9.41 1.41L8 -6.99382e-07L6.99382e-07 8L8 16Z" fill="white"/></svg>', '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="white"/></svg>'],
			mouseDrag: false,
			responsive: {
				0: {
					items: 1,
				},
				576: {
					items: 1,
				},
				768: {
					items: 1,
				},
				992: {
					items: 1,
				},
				
			},
		});
		$(".featured-project__items").on("translate.owl.carousel", function (event) {
			$(".featured-project__items").addClass("done");
		});
		$(window).scroll(function () {
			if ($(this).scrollTop() > 0) {
				$(".custom-header").addClass("active");
			} else {
				$(".custom-header").removeClass("active");
			}
		});
		// Nice select
		$("select").niceSelect();
		// magnific Popup
		$(".popup-video").magnificPopup({
			type: 'iframe',
			iframe: {
				markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allow="autoplay"></iframe>' + '</div>',
				patterns: {
					youtube: {
						index: 'youtube.com/',
						id: 'v=',
						src: 'https://www.youtube.com/embed/%id%?autoplay=1'
					}
				}
			}
		});

		$("body").changeCursor(
			"assets/images/terminus-cursor.svg",
			13,
			13,
			99999999,
			"t-cursor",
			"input, a, textarea, .nice-select, button"
		);
	});

})(jQuery);

