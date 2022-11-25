// Subnav
(function($){
  
$(".mob-init").click(function(){
  var mainnav = $("#main-nav > .main-menu");
  var subnav = $(".sub-nav");

  if (mainnav.css('display') == 'none'){
    $(mainnav).show();
    $(mainnav).addClass("mob-nav");
  } else{
    $(mainnav).hide();
    $(mainnav).removeClass("mob-nav");
  }
});

// Smooth Scrolling script
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

$(".split-title").each(function() {
    $(this).html($(this).html().replace(/ /g, '<br />'));
});

// Get the modal
var modal = document.getElementsByClassName("modal-content");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    $('#profile-modal').hide();
  }
}

$('.team-profile').on('click', function() {
  $(this).find('#profile-modal').show();
});

$(document).on('click', '.close', function () {
    $(this).parent().parent().hide();
});

$('.owl-carousel').owlCarousel({
  autoplay: false,
  autoplayHoverPause: true,
  loop: true,
  margin: 10,
  items: 1,
  dots: true,
  nav: true,
  navText: ["<img src='/base_html/www/images/icons/chevron-left-white.svg' />","<img src='/base_html/www/images/icons/chevron-right-white.svg' />"],
});

$('.owl-carousel.projects').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:1,
    dots:true,
});

$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});

$(document).ready(function(){
  $(".owl-carousel .item").addClass('nav-hover');

  $("#main-nav ul li").mouseover(function () {
    $(this).css('background-color', 'white');
    $("body").addClass("hovered");
  });

  $("#main-nav ul li").mouseout(function () {
    $(this).css('background-color', '');
    $("body").removeClass("hovered");
  });
});

})(jQuery);
