(function ($) {

  // Preloader.
  $(window).on('load', function () {
    $('#preloader').fadeOut();
  });
  // --------------------------------

  // Images lazy load 
  $('img.lazy').lazy({
    effect : "fadeIn",
  });
  // --------------------------------

  // Remove HTML comments
  $('*').contents().each(function() {
    if(this.nodeType === Node.COMMENT_NODE) {
      $(this).remove();
    }
  });
  // --------------------------------

  // Form button
  $('#index-page #form-btn').on('click', function() {
    $('#index-page #form-container').toggleClass('open');
  });
  // --------------------------------

  // PAGE: Abuse.php
  // For: (.accordion).
  $('#abuse-page .accordion .item-head').on('click', function () {
    $(this).parent().find('.item-body').slideToggle().parent().siblings().find('.item-body').slideUp();
    $(this).parent().toggleClass('open').siblings().removeClass('open');
  });
  // --------------------------------

  // PAGES: Terms.php
  // FOR: (.item).
  $('#terms-page .sidebar .item.has-menu > a').on('click', function() {
    $(this).parent().toggleClass('open-menu').siblings().removeClass('open-menu');
  });
  // FOR: (.menu-item).
  $('#terms-page .sidebar .menu-item').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
  });
  // --------------------------------

  // Filter nav (#filter-nav-v)
  $('#filter-nav-v .tab').on('click', function () {
    // Add class (active).
    $(this).addClass('active').parent().siblings().find('.tab').removeClass('active');
    // Get (data-filter) value.
    const val = $(this).data('filter');
    // Compare table (#compare-table-v).
    $('#compare-table-v tbody tr:not(.hovered, .t-space)').addClass('tr-hide');
    $('#compare-table-v tbody tr[data-filter="'+val+'"]').removeClass('tr-hide');
  });

   // Custom thead (custom-thead).
  $('#custom-thead-v .tab').on('click', function () {
    // Add class (active).
    $(this).addClass('active').siblings().removeClass('active');
    // Get (data-filter) value.
    const val = $(this).data('filter');
    // Compare table (#compare-table-v).
    $('#compare-table-v tbody tr td[data-for]').addClass('td-hide');
    $('#compare-table-v tbody tr td[data-for="'+val+'"]').removeClass('td-hide');
    // Content
    $('#custom-thead-v .tab-content[data-for]').addClass('content-hide');
    $('#custom-thead-v .tab-content[data-for="'+val+'"]').removeClass('content-hide');
  });
  // --------------------------------

  // VPS Page > Filter Bar
  $('#vps-page .filter-bar .item').on('click', function() {
    // vars
    const e = $(this).data('show');
    $('.filter-' + e).addClass('show').siblings().removeClass('show');

    // actions
    $(this).parents('.filter-bar').find('.item').removeClass('active')
    $(this).addClass('active');
  });
  // --------------------------------

  // Dedicated Page > Filter Bar
  $('#dedi-page .filter-bar .item').on('click', function() {
    // vars
    const e = $(this).data('show');
    $('.filter-' + e).addClass('show').siblings().removeClass('show');

    // actions
    $(this).parents('.filter-bar').find('.item').removeClass('active')
    $(this).addClass('active');
  });
  // --------------------------------

  // KB pages => Filter
  $('#kb2-page #filter li').on('click', function () {

    // Const
    const e = $(this).data('filter');

    // Add class active.
    $(this).addClass('active').siblings().removeClass('active');

    // Check if this element has data-filter = all.
    if (e === 'all') {
      // Show all boxes
      $('#kb2-page .box[data-filter]').parent().show();
    } else {
      // Hide all boxes
      $('#kb2-page .box[data-filter]').parent().hide();
      // Show the required box.
      $('#kb2-page .box[data-filter='+e+']').parent().show();
    }
  });
  // --------------------------------

  // Scroll to section function
  $('[data-click-type="scroll-to"]').on('click', function() {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'data-scroll')).offset().top
    }, 1000);
  });
  // --------------------------------

  // FOR: Close Modals
  $('.close-modal').on('click', function () {
    $(this).parents('[data-type="modal"]').fadeOut();
  });
  // --------------------------------

  // FOR: Cookies

  // Cookies Dialog Cookie
  $('#cookies-dialog-btn').on('click', function () {
    $.cookie("cookies", "true");
  });
  if(typeof $.cookie('cookies') != 'undefined') {
    $('#cookies-dialog').hide();
  }

  // Notices Bar Cookie
  $('#close-notices-bar-btn').on('click', function() {
    $.cookie('notices-bar', 'true');
  });
  if(typeof $.cookie('notices-bar') != 'undefined') {
    $('#notices-bar').hide();
  }
  // --------------------------------

}(jQuery));
