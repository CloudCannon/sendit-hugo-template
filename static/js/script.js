$(document).ready(function () {
   'use strict';

   $(window).on('scroll', function () {
      var windscroll = $(window).scrollTop();
      if (windscroll >= 70) {
         $('#mainnavigationBar').addClass('sticky-nav');
      } else {
         $('#mainnavigationBar').removeClass('sticky-nav');
      }
   });
   $('.navbar-toggler').on('click', function () {
      var navbar = $('#mainnavigationBar');
      navbar.toggleClass('bg-nav');
   });


   // Magnific Popup
   $('.popup-vimeo').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
   });

   const counterUp = window.counterUp.default

const callback = entries => {
   entries.forEach( entry => {
      const el = entry.target
      if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
         counterUp( el, {
            duration: 1000,
            delay: 16,
         } )
         el.classList.add( 'is-visible' )
      }
   } )
}

const IO = new IntersectionObserver( callback, { threshold: 1 } )

// Skip the count-up in the Visual Editor: counterUp rewrites the element's
// innerHTML, but each .counter is also a text editable region, so the region
// runtime writes to the same element and they conflict. The editor frames the
// site; the live site is top-level and still animates.
const inVisualEditor =
   window.self !== window.top || typeof window.CloudCannon !== 'undefined'

const els = inVisualEditor ? [] : document.querySelectorAll( '.counter' )
els.forEach(el => {
   IO.observe( el )
})



   //Show password
   $('.viewPassword').click(function () {
      $(this).toggleClass('fa-eye fa-eye-slash');
      var input = $($(this).attr('toggle'));
      if (input.attr('type') == 'password') {
         input.attr('type', 'text');
      } else {
         input.attr('type', 'password');
      }
   });
   // Scroll spy style start
   $('.nav-link').click(function () {
      $('.nav-link').removeClass('active');
      $(this).addClass('active');
   });


   $('.nav-item.dropdown > .dropdown-link').on('click', function(e) {
      if($(window).width() < 991.98) {
        e.preventDefault();
        var dropdownOpened = $(this).parent().hasClass('show');
        $('.dropdown').removeClass('show');
        $('.dropdown-menu').removeClass('show');
        
        if (!dropdownOpened) {
          $(this).next('.dropdown-menu').addClass('show');
          $(this).parent('.dropdown').addClass('show');
        }
      }
    });

});
