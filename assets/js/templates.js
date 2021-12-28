(function ($) {

  // FOR: Navbar

  // Close notices bar.
  $('#close-notices-bar-btn').on('click', function () {
    $('#notices-bar').slideUp();
  });

  // Languages Menu.
  $('#lang .current').on('click', function () {
    $(this).parent().toggleClass('open');
  });

  // Hide (#lang) when click outside it.
  $(document).mouseup(function (e) {
    const langMenu = $("#lang");
    // if the target of the click isn't the langMenu nor a descendant of the langMenu
    if (!langMenu.is(e.target) && langMenu.has(e.target).length === 0) {
      langMenu.removeClass('open');
    }
  });

  // Open (.links).
  $('#open-links-btn').on('click', function () {
    $('#theme-navbar-links').addClass('open-links');
  });

  // Close (.links).
  $('#close-links-btn').on('click', function () {
    $('#theme-navbar-links').removeClass('open-links');
  });

  // Indicator.
  const link = $("#theme-navbar .nav-bottom .links .link:not(.has-dropdown-menu)");
  const ind = $("#theme-navbar .nav-bottom .links .indicator");
  const linkWidth = $("#theme-navbar .nav-bottom .links .link:nth-child(2)").width();
  ind.css('width', linkWidth);

  function handleIndicator(el) {
    ind.css('width', el.offsetWidth + 'px');
    ind.css('left', el.offsetLeft + 'px');
  }

  link.each(function (item, index) {
    $(this).on("click", function (e) {
      handleIndicator(e.target);
      $(this).addClass('active').siblings().removeClass('active');
    });
  });

  // Navbar f-nav.
  $('#theme-navbar .f-nav .f-nav-tab').on('click', function(e) {
    const filter = $(this).data('filter');
    $('#theme-navbar .mega-menu .f-area.'+filter).siblings().hide();
    $('#theme-navbar .mega-menu .f-area.'+filter).show();
  });

  // Open (#side-box).
  $('#side-box-btn').on('click', function() {
    $('#side-box').addClass('open-side-box');
  });

  // Close (#side-box).
  $('#close-side-box-btn').on('click', function() {
    $('#side-box').removeClass('open-side-box');
  });

  // 
  // Indicator.
  const sb_link = $("#theme-navbar .side-box .f-nav .f-nav-tab");
  const sb_ind = $("#theme-navbar .side-box .f-nav .indicator");
  const sb_linkWidth = $("#theme-navbar .side-box .f-nav .f-nav-tab:nth-child(1)").width();
  sb_ind.css('width', sb_linkWidth);

  function handleIndicator(ele) {
    sb_ind.css('width', ele.offsetWidth + 'px');
    sb_ind.css('left', ele.offsetLeft + 'px');
  }

  sb_link.each(function (item, index) {
    $(this).on("click", function (e) {
      handleIndicator(e.target);
      $(this).addClass('active').siblings().removeClass('active');
    });
  });

  // Check if class (open-side-box) exist.
  $("#theme-navbar .nav-bottom .links .link:not(#side-box-btn)").on('click', function() {
    if ($('.open-side-box')[0]) {
      $('#side-box').removeClass('open-side-box');
    }
  });

  // Hide (#side-box) when click outside it.
  $(document).mouseup(function (e) {
    const sideBox = $("#side-box");
    // if the target of the click isn't the sideBox nor a descendant of the sideBox
    if (!sideBox.is(e.target) && sideBox.has(e.target).length === 0) {
      sideBox.removeClass('open-side-box');
    }
  });

  // Dropdown menu.
  $('#theme-navbar .link.has-dropdown-menu > a').on('click', function (e) {
    e.preventDefault();
  });

  // Show and hide (.dropdown-menu).
  $('#theme-navbar .link.has-dropdown-menu > a').on('click', function () {
    $(this).parent().toggleClass('open-dropdown-menu');
  });

  // Hide (.dropdown-menu) when click outside it.
  $(document).mouseup(function (e) {
    const dropdownMenu = $("#theme-navbar .link.has-dropdown-menu");
    // if the target of the click isn't the dropdownMenu nor a descendant of the dropdownMenu
    if (!dropdownMenu.is(e.target) && dropdownMenu.has(e.target).length === 0) {
      dropdownMenu.removeClass('open-dropdown-menu');
    }
  });

  // Open (#user-dropdown-menu).
  $('#user-menu-btn > img').on('click', function () {
    $('#user-menu-btn').toggleClass('open')
  });

  // Hide (#user-dropdown-menu) when click outside it.
  $(document).mouseup(function (e) {
    const userDropMenu = $("#user-menu-btn");
    // if the target of the click isn't the userDropMenu nor a descendant of the userDropMenu
    if (!userDropMenu.is(e.target) && userDropMenu.has(e.target).length === 0) {
      userDropMenu.removeClass('open');
    }
  });
  // ------------------------------------------------------

  // FOR: Footer

  // Footer List
  $('.theme-footer .list-title').on('click', function () {
    $(this).parent().toggleClass('open-list');
  });
  // Cookies Dialog
  $('#cookies-dialog-btn').on('click', function () {
    $('#cookies-dialog').fadeOut();
  });
  // ------------------------------------------------------

  // FOR: Theme Settings
  $('#theme-settings-btn').on('click', function () {
    $('#theme-settings').addClass('open');
  });
  // Close Theme Settings
  $('#theme-settings-close-btn').on('click', function () {
    $('#theme-settings').removeClass('open');
  });

  // FOR: Themes
  $('#theme-settings .theme-btn').on('click', function () {

    // Add class (active-theme).
    $(this).addClass('active-theme').siblings().removeClass('active-theme');

    // Check if button for light theme
    if ($(this).attr('id') === 'light-theme-btn') {
      $('body').addClass('light-theme');
    }

    // Else if button for dark theme
    else if ($(this).attr('id') === 'dark-theme-btn') {
      $('body').removeClass('light-theme');
    }

  });

  // FOR: Feature Option
  $('#theme-settings .feature-option .switch-btn').on('click', function () {
    // Toggle class (option-active).
    $(this).parent().toggleClass('option-active');
  });
  // ------------------------------------------------------

  // FOR: FAQs

  // (#faqs-category)
  $('#faqs-category .item').on('click', function() {

    $(this).addClass('active').siblings().removeClass('active');

    const data = $(this).data('category');

    // hide all boxes then show one that clicked
    $('#faqs .box').hide();
    $('#faqs .box.category-' + data).show();

  });

  // (#faqs .q)
  $('#faqs .q .q-h').on('click', function() {
    $(this).parent().toggleClass('open').siblings().removeClass('open');
    if ($(this).parent().hasClass('open')) {
      $(this).parent().find('.q-b').slideDown();
      $(this).parent().siblings().find('.q-b').slideUp();
    } else {
      $(this).parent().find('.q-b').slideUp();
    }
  });
  // ------------------------------------------------------

}(jQuery));