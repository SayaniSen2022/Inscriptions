
  $(document).ready(function () {
    const $overlay = $('#searchOverlay');
    const $input = $overlay.find('input');

    // Show overlay on button click
    $('.search-btn').on('click', function (e) {
      e.stopPropagation();
      $overlay.addClass('active');
    });

    // Close overlay on clicking the ✖ icon
    $('#closeOverlay').on('click', function () {
      $overlay.removeClass('active');
    });

    // Prevent showing cursor by default — only when user clicks input
    $input.on('focus', function () {
      $(this).css('caret-color', 'auto');
    }).on('blur', function () {
      $(this).css('caret-color', 'transparent');
    }).css('caret-color', 'transparent');
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

  $(document).ready(function () {
    // Toggle filter section
    $('.category-header').on('click', function () {
      const $icon = $(this).find('.toggle-icon');
      const $options = $(this).next('.filter-options');

      $options.slideToggle();
      $icon.toggleClass('fa-caret-down fa-caret-up');
    });

    // Toggle More / Less
    $('.toggle-more').on('click', function () {
      const $more = $(this).siblings('.more-options');

      $more.slideToggle();
      if ($(this).text() === 'More') {
        $(this).text('Less');
      } else {
        $(this).text('More');
      }
    });
  });

