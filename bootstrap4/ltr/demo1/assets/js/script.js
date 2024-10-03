$(function() {
	// Sidebar links
	$('.sidebar .sidebar-menu li a').on('click', function() {
		const $this = $(this);
		if($this.parent().hasClass('open')) {
			$this.parent().children('.dropdown-menu').slideUp(500, () => {
				$this.parent().removeClass('open');
			});
		} else {
			$this.parent().parent().children('li.open').children('.dropdown-menu').slideUp(200);
			$this.parent().parent().children('li.open').children('a').removeClass('open');
			$this.parent().parent().children('li.open').removeClass('open');
			$this.parent().children('.dropdown-menu').slideDown(500, () => {
				$this.parent().addClass('open');
			});
		}
	});

	$('.offcanvas-toggle').click(function(e) {
		e.preventDefault();
		$('.offcanvas-menu').toggleClass('open');
	});
	
	// Sidebar Activity Class
	const sidebarLinks = $('.sidebar').find('.sidebar-link');
	sidebarLinks.each((index, el) => {
		$(el).removeClass('active');
	}).filter(function() {
		const href = $(this).attr('href');
		const pattern = href[0] === '/' ? href.substr(1) : href;
		return pattern === (window.location.pathname).substr(1);
	}).addClass('active');
	
	// ٍSidebar Toggle
	$('.sidebar-toggle').on('click', e => {
		$('.app').toggleClass('is-collapsed');
		e.preventDefault();
	});
}());

function toggleFullScreen() {
	if((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
		if(document.documentElement.requestFullScreen) {
			document.documentElement.requestFullScreen();
		} else if(document.documentElement.mozRequestFullScreen) {
			document.documentElement.mozRequestFullScreen();
		} else if(document.documentElement.webkitRequestFullScreen) {
			document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
		}
	} else {
		if(document.cancelFullScreen) {
			document.cancelFullScreen();
		} else if(document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if(document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		}
	}
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl)
})

jQuery(document).ready(function(e) {
	jQuery('.sidemenu').find('.current-menu-item').closest('.current-menu-parent').children('.dropdown-toggle').trigger('click');
});

$(document).ready(function(){
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
	
	// scroll body to 0px on click
	$('#back-to-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 400);
		return false;
	});
});

$(document).ready(function() {

	// Get current page URL
	var url = window.location.href;

	// remove # from URL
	url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));

	// remove parameters from URL
	url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));

	// select file name
	url = url.substr(url.lastIndexOf("/") + 1);

	// If file name not avilable
	if(url == ''){
	url = 'index.html';
	}

	// Loop all menu items
	$('.sidebar-menu li').each(function(){

		// select href
		var href = $(this).find('a').attr('href');

		// Check filename
		if(url == href){

			// Select parent class
			var parentClass = $(this).parent('ul').attr('class');

			if(parentClass == 'dropdown-menu'){

				// Add class
				$(this).addClass('subactive');
				$(this).parents('.sidebar-menu li').addClass('active');
			}else{

				// Add class
				$(this).addClass('active');
			}

		}
	});
});