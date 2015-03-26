$(function($) {

$('.dropdown-menu').find('form').click(function (e) {
        e.stopPropagation();
    });
	
    setTimeout(function() {
        $('#content-wrapper > .row').css({
            opacity: 1
        });
			
    }, 200);
    $('#sidebar-nav,#nav-col-submenu').on('click', '.dropdown-toggle', function(e) {
        e.preventDefault();
        var $item = $(this).parent();
        if (!$item.hasClass('open')) {
            $item.parent().find('.open .submenu').slideUp('fast');
            $item.parent().find('.open').toggleClass('open');
        }
        $item.toggleClass('open');
        if ($item.hasClass('open')) {
            $item.children('.submenu').slideDown('fast');
        } else {
            $item.children('.submenu').slideUp('fast');
        }
    });
    $('body').on('mouseenter', '#page-wrapper.nav-small #sidebar-nav .dropdown-toggle', function(e) {
        if ($(document).width() >= 992) {
            var $item = $(this).parent();
            if ($('body').hasClass('fixed-leftmenu')) {
                var topPosition = $item.position().top;
                if ((topPosition + 4 * $(this).outerHeight()) >= $(window).height()) {
                    topPosition -= 6 * $(this).outerHeight();
                }
                $('#nav-col-submenu').html($item.children('.submenu').clone());
                $('#nav-col-submenu > .submenu').css({
                    'top': topPosition
                });
            }
            $item.addClass('open');
            $item.children('.submenu').slideDown('fast');
        }
    });
    $('body').on('mouseleave', '#page-wrapper.nav-small #sidebar-nav > .nav-pills > li', function(e) {
        if ($(document).width() >= 992) {
            var $item = $(this);
            if ($item.hasClass('open')) {
                $item.find('.open .submenu').slideUp('fast');
                $item.find('.open').removeClass('open');
                $item.children('.submenu').slideUp('fast');
            }
            $item.removeClass('open');
        }
    });
    $('body').on('mouseenter', '#page-wrapper.nav-small #sidebar-nav a:not(.dropdown-toggle)', function(e) {
        if ($('body').hasClass('fixed-leftmenu')) {
            $('#nav-col-submenu').html('');
        }
    });
    $('body').on('mouseleave', '#page-wrapper.nav-small #nav-col', function(e) {
        if ($('body').hasClass('fixed-leftmenu')) {
            $('#nav-col-submenu').html('');
        }
    });
    $('#make-small-nav').click(function(e) {
        $('#page-wrapper').toggleClass('nav-small');
    });
	    $('.make-small-nav').click(function(e) {
        $('#page-wrapper').toggleClass('nav-small');
    });
    $(window).smartresize(function() {
        if ($(document).width() <= 991) {
            $('#page-wrapper').removeClass('nav-small');
        }
    });
    $('.mobile-search').click(function(e) {
        e.preventDefault();
        $('.mobile-search').addClass('active');
        $('.mobile-search form input.form-control').focus();
    });
    $(document).mouseup(function(e) {
        var container = $('.mobile-search');
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.removeClass('active');
        }
    });
    $('.fixed-leftmenu #col-left').nanoScroller({
        alwaysVisible: false,
        iOSNativeScrolling: false,
        preventPageScrolling: true,
        contentClass: 'col-left-nano-content'
    });
    $("[data-toggle='tooltip']").each(function(index, el) {
        $(el).tooltip({
            placement: $(this).data("placement") || 'top'
        });
    });
});
$.fn.removeClassPrefix = function(prefix) {
    this.each(function(i, el) {
        var classes = el.className.split(" ").filter(function(c) {
            return c.lastIndexOf(prefix, 0) !== 0;
        });
        el.className = classes.join(" ");
    });
    return this;
};
(function($, sr) {
    var debounce = function(func, threshold, execAsap) {
        var timeout;
        return function debounced() {
            var obj = this,
                args = arguments;

            function delayed() {
                if (!execAsap)
                    func.apply(obj, args);
                timeout = null;
            };
            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);
            timeout = setTimeout(delayed, threshold || 100);
        };
    }
    jQuery.fn[sr] = function(fn) {
        return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
    };
	
//$(".nav-stacked > li > ul ").css({"display":"block"});
document.write('<script type="text/javascript" src="js/pace.min.js"></script>');
document.write('<script type="text/javascript" src="js/jquery.dataTables.js"></script>');
document.write('<script type="text/javascript" src="js/dataTables.bootstrap.js"></script>');

})(jQuery, 'smartresize');