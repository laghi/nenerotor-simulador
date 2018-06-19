$(document).ready(function () {
  //adiciona classe automagica
  $('#base path').addClass('BlackRussian');
  $('#inferior path').addClass('color-coral');
  $('#superior path').addClass('color-Windsor');
  $('#lateral-inferior path').addClass('color-Manatee');
  $('#lateral-superior path').addClass('color-Silver');
  $('#frontal path').addClass('BlackRussian');
});


$(document).ready(function () {
  $(".toggle-aside").click(function (event) {
    $('.simulador__aside').toggleClass('simulador__aside--open');
    $('.simulador__aside__backdrop').toggleClass('simulador__aside__backdrop--open');
    $('body').toggleClass('simulador__aside__backdrop__body--open');
    event.preventDefault();
  });
});

$(document).ready(function () {
  $('[data-toggle="popover"]').popover();
});


$('.is__color-interactive').click(function (e) {
  var offset = $(this).offset();
  var left = e.pageX;
  var top = e.pageY;
  var theHeight = $('.popover').height();
  $('.popover').show();
  $('.popover').css('left', (left + 10) + 'px');
  $('.popover').css('top', (top - (theHeight / 2) - 0) + 'px');
});

$('.popover .close').click(function (e) {
    $('.popover').hide();
});