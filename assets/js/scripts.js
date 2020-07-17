$(document).ready(function () {
  
    // SLIDER
    var elWrap = $('#slider'),
		el =  elWrap.find('.slide'),
		indexBanner = 1,
		indexMax = el.length;
	
	function change () {
		el.fadeOut(500);
		el.filter(':nth-child('+indexBanner+')').fadeIn(500);
	}	
	
	elWrap.append('<span class="next"><i class="fas fa-angle-right"></i></span><span class="prev"><i class="fas fa-angle-left"></i></span>');
	
	$('span.next').click(function() {
		indexBanner++;
		if(indexBanner > indexMax) {
			indexBanner = 1;
		}
		change ();
	});
	$('span.prev').click(function() {
		indexBanner--;
		if(indexBanner < 1) {
			indexBanner = indexMax;
		}
		change ();
	});	

	 /* FIXED NAV */
	 var fixedNav = $("#header__nav"),
	 bannerH = $("#banner").innerHeight(),
	 scrollOffset = $(window).scrollTop();
 
 checkScroll(scrollOffset);

 $(window).on("scroll", function() {
	 scrollOffset = $(this).scrollTop();

	 checkScroll(scrollOffset);
 });

 function checkScroll(scrollOffset) {
	 if( scrollOffset >= bannerH ) {
		fixedNav.addClass("fixed");
	 } else {
		fixedNav.removeClass("fixed");
	 }
 }

 	 /* MENU NAVIGATION AND TOGGLE */
	  $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });
});

