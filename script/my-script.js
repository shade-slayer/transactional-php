//lazy loader
$("img.lazy").lazyload({
    effect : "fadeIn"
});
// Add slideDown animation to Bootstrap dropdown when expanding.
 $('.dropdown').on('show.bs.dropdown', function() {
   $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
 });

 // Add slideUp animation to Bootstrap dropdown when collapsing.
 $('.dropdown').on('hide.bs.dropdown', function() {
   $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
 });


 //stop iframe video, when modal video cancel
 $(document).ready(function() {
   $('#intro-modal-video').on('hidden.bs.modal', function() {
     var $this = $(this).find('iframe'),
       tempSrc = $this.attr('src');
     $this.attr('src', "");
     $this.attr('src', tempSrc);
   });

 //stop html5 video, when modal video cancel
   $('#html5Video').on('hidden.bs.modal', function() {
     var html5Video = document.getElementById("htmlVideo");
     if (html5Video != null) {
       html5Video.pause();
       html5Video.currentTime = 0;
     }
   });
 });




 /**
 * Vertically center Bootstrap 3 modals so they aren't always stuck at the top
 */
$(function() {
    function reposition() {
        var modal = $(this),
            dialog = modal.find('.modal-dialog');
        modal.css('display', 'block');

        // Dividing by two centers the modal exactly, but dividing by three
        // or four works better for larger screens.
        dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
    }
    // Reposition when a modal is shown
    $('.modal').on('show.bs.modal', reposition);
    // Reposition when the window is resized
    $(window).on('resize', function() {
        $('.modal:visible').each(reposition);
    });
});


/* ===============
Testimonial carousel
+++++++++++++++++++++*/
$(document).ready(function() {
  $('#media').carousel({
    pause: true,
    interval: false,

  });
});

/*===================
FAQ's
++++++++++++++++++*/
//hide answer first
$(".answer").hide();
//click answer open
$(".question").click(function(){
  //$(this).next().toggle();
   $(this).next().slideToggle(400,"swing");
   $(this).find("i").toggleClass("fa-chevron-right fa-angle-down");

});

/* ===============
About Page Profile Hover
+++++++++++++++++++++*/

jQuery(document).ready(function() {
    $('.profile-details').hide();
    jQuery('.profile-column').hover(function() {
        jQuery(this).find('div:first').show("200")
    }, function() {
        jQuery(this).find('div:first').hide();
    });
});


/****
Navbar Scroll Down Background Color Appear
*/
$(window).scroll(function() {
// 100 = The point you would like to fade the nav in.

	if ($(window).scrollTop() > 80 ){

 		$('.navbar-fixed-top').addClass('show');

  } else {

    $('.navbar-fixed-top').removeClass('show');

 	};
});

$('.scroll').on('click', function(e){
		e.preventDefault()

  $('html, body').animate({
      scrollTop : $(this.hash).offset().top
    }, 80);
});


/******Mobile Modal Navbar Full Screen
Cancel automatically when it's width above 520px
********/
var windowsize = $(window).width();

$(window).resize(function() {
  windowsize = $(window).width();
  if (windowsize > 764) {
    //if the window is greater than 440px wide then turn on jScrollPane..
         $('#menuModal').modal('hide');

  }
});

/**********
Hero Text Typewriter animation
***********/
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
