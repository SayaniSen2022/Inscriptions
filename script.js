
  $(document).ready(function () {
    const $overlay = $('#searchOverlay');
    const $searchBox = $('.search-box');
    const $input = $overlay.find('input');

    // Show overlay on button click
    $(document).on('click', '.search-btn', function (e) {
      e.stopPropagation();
      $overlay.addClass('active');
      setTimeout(() => {
            $searchBox.css('transform', 'translateX(0)'); // Gradual transition applied
        }, 100);
    });

    // Close overlay on clicking the ✖ icon
    $(document).on('click', '#closeOverlay',function () {
      $searchBox.css('transform', 'translateX(-400px)'); // Hide smoothly before removing overlay
        setTimeout(() => {
            $overlay.removeClass('active');
        }, 300); 
    });

    // Prevent showing cursor by default — only when user clicks input    
      $(document).on('focus', '.custom-caret', function(){
        $(this).css('caret-color', 'auto');
      }).on('blur', '.custom-caret', function(){
        $(this).css('caret-color', 'transparent');
      });
      $('.custom-caret').css('caret-color', 'transparent');
  });

  /****Navbar hamburger menu for mobile******/
$(document).ready(function(){
  $(document).on('click', ".hamburger", function(){
    $(this).toggleClass("is-active");
  });
});

  $(document).ready(function () {
    let isOpen = false;

    $('.menu-toggle').click(function () {
      $('.nav-links').slideToggle();
      isOpen = !isOpen;

      // Toggle icon between hamburger and X
      $(this).find('i').toggleClass('fa-bars fa-times');
    });

    // Optional: hide menu on link click (mobile)
    $('.nav-links a').click(function () {
      if ($(window).width() < 768) {
        $('.nav-links').slideUp();
        $('.menu-toggle i').removeClass('fa-times').addClass('fa-bars');
        isOpen = false;
      }
    });

    // Reset menu if window resized
    $(window).resize(function () {
      if ($(window).width() > 768) {
        $('.nav-links').show();
        $('.menu-toggle i').removeClass('fa-times').addClass('fa-bars');
      } else if (!isOpen) {
        $('.nav-links').hide();
      }
    });
  });
 /****Navbar hamburger menu for mobile ends******/
