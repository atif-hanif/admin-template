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