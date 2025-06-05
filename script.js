
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

// Filters Section

  $(document).ready(function () {
    // Toggle filter section
    $('.category-header').on('click', function () {
      const $icon = $(this).find('.toggle-icon');
      const $options = $(this).next('.filter-options');

      $options.slideToggle(); //sliding animation
      $icon.toggleClass('fa-angle-down fa-angle-up');
    });

    //toggle more and less

    $(".toggle-more").on('click', function () {
        if (
          $(".more-filter-options .filters").hasClass(
            "more-filters"
          )
        ) {
          $(this).text("-Less");
        } else {
          $(this).text("+More");
        }

        $(".more-filter-options .filters").toggleClass(
          "more-filters"
        );
      });

  });

// Filters Section Ends


  // $('.full-view-btn').on('click', function(){
  //   $('.right').show();
  // })


 //show original script box script section

 $('.see-original-btn').on('click', function (){
  if($('.article-2 .content-cont').hasClass('more-content')){
    $(this).fadeOut(600);
  }
  $('.article-2 .content-cont').toggleClass('more-content');
 });



  $('.roman-btn').on('click', function () {
    $('.original-txt-btn').removeClass('active');
    $(this).addClass('active');    
    $('.roman-text').show();
    $('.original-text').hide();
  });

  $('.original-txt-btn:not(.roman-btn)').on('click', function () {
    $('.roman-btn').removeClass('active');
    $(this).addClass('active');    
    $('.roman-text').hide();
    $('.original-text').show();
  });


//displays related links when a filter is selected
 $(".filter").change(function() {
        if ($(".filter:checked").length > 0) {
            $("#right-block").fadeIn();
        } else {
            $("#right-block").fadeOut();
        }
    });


   $('.rom-btn').on('click', function () {
    $('.org-btn').removeClass('org-active');
    $(this).addClass('org-active');    
    $('.det-roman-text').show();
    $('.det-original-text').hide();
  });

  $('.org-btn:not(.rom-btn)').on('click', function () {
    $('.rom-btn').removeClass('org-active');
    $(this).addClass('org-active');    
    $('.det-roman-text').hide();
    $('.det-original-text').show();
  });



      var height = $('.det-original-text').height();
    $(window).scroll(function(){
        if($(this).scrollTop() > height){
            $('.lang-btn-container-2').addClass('fixed');
        }
        else{
            $('.lang-btn-container-2').removeClass('fixed');
        }
    });