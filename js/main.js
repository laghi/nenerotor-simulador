(function ($) {

  var pathEmEdicao;

  var bodyColors = [
    'Amarelo',
    'AmareloLimao',
    'AzulMarinho',
    'AzulRoyal',
    'AzulTurquesa',
    'Cinza',
    'CinzaChumbo',
    'Laranja',
    'Prata',
    'Preto',
    'Rosa',
    'Roxo',
    'Vermelho',
  ];

  var stripeColors = [
    'Amarelo',
    'AzulTurquesa',
    'AzulRoyal',
    'Branco',
    'Cinza',
    'CinzaChumbo',
    'Laranja',
    'Preto',
    'Rosa',
    'Roxo',
    'VerdeBandeira',
    'VerdeLimao',
    'Vermelho',
  ];

  $(function () {
    changeColor($('#inferior path'), 'Preto');
    changeColor($('#superior path'), 'Cinza');
    changeColor($('#lateral-inferior path'), 'AzulTurquesa');
    changeColor($('#lateral-superior path'), 'Amarelo');

    $(".toggle-aside").click(function (event) {
      $('.simulador__aside').toggleClass('simulador__aside--open');
      $('.simulador__aside__backdrop').toggleClass('simulador__aside__backdrop--open');
      $('body').toggleClass('simulador__aside__backdrop__body--open');
      event.preventDefault();
    });
    $('#popover-select').select2({
      escapeMarkup: function (markup) {
        return markup;
      },
      templateResult: function (data) {
        return '<div><span style="display: inline-block; width: 15px; height: 15px; vertical-align: middle; margin-right: 10px;" class="color-' + data.text + '"></span>' + data.text + '</div>';
      },
      templateSelection: function (data) {
        return data.text;
      },
      width: 200
    });

    $('.is__color-interactive').click(function (e) {
      pathEmEdicao = e.target;
      prepareSelect(pathEmEdicao);
      var offset = $(this).offset();
      var left = e.pageX;
      var top = e.pageY;
      var theHeight = $('.popover').height();
      $('.popover').css('left', (left + 10) + 'px');
      $('.popover').css('top', (top - (theHeight / 2) - 0) + 'px');
      $('.popover').show();
    });
    $('#popover-select').change(function(){
      var selectCor = $('#popover-select');
      changeColor(pathEmEdicao, selectCor.val());
      $('.popover').hide();
    });
    $('#escolher-cor').click(function () {     
      $('.popover').hide();
    });
    $('body *:not(.controle-cor)').click(function (e) {
      var $element = $(e.target)
      var classe = $element.attr('class') || '';
      if ($element.is('.is__color-interactive') || $element.is('.controle-cor') || classe.toLowerCase().indexOf('select2') >= 0) {
        return;
      }
      $('.popover').hide();
    });
  });

  function prepareSelect(e) {
    var $element = $(e);
    var colors = getPossibleColors($element);
    var selectCor = $('#popover-select');
    selectCor.empty();
    for (var i in colors) {
      selectCor.append('<option class="controle-cor" value="' + colors[i] + '">' + colors[i] + '</option>')
    }
    selectCor.val($element.data('current-color'));
    selectCor.trigger('change');
  }

  function getPossibleColors($element) {
    var harnessPart = $element.parent().data('harness-part');
    if (harnessPart === 'body') {
      return bodyColors;
    }
    return stripeColors;
  }

  function changeColor(e, newColor) {
    var elementEditing = $(e).parent().find('.is__color-interactive');
    elementEditing.removeClass('color-' + elementEditing.data('current-color'));
    elementEditing.data('current-color', newColor);
    elementEditing.addClass('color-' + newColor);
  }



})(jQuery);