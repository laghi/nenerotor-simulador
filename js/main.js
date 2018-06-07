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
  $('.popover').css('top', (top - (theHeight / 2) - 10) + 'px');
});



// $(document).ready(function(){ 


//     function somaModulos () {

//        $(".nivel-1 path, .nivel-2 path, .nivel-3 path").css({"fill" : "#094A41"});

//     }




//             $(".pai").click(function()  { 

//              $(".nivel-3 path.nivel3clicado").removeClass('nivel3clicado'); 
//              $(".nivel-2 path.nivel2clicado").removeClass('nivel2clicado'); 

//                var identificador = $(this).attr('id');

//               if($(this).hasClass('active')){

//                 $(this).removeClass ( 'active' ); 
//                  $(".filho-"+identificador+",  .neto-"+identificador).removeClass ( 'active' ); 

//               }
//               else{

//                 somaModulos();
//                 $(this).addClass ( 'active' ); 
//                 $(".filho-"+identificador+",  .neto-"+identificador).addClass ( 'active' ); 

//              }
//             }); 



//     // codigo para resetar as cores
//      $('#logo-eberick-v9').click(function()  { 
//             $(".active").removeClass ( 'active' ); 
//             $(".nivel-1 path").css({"fill" : "#0C3C28"});
//             $(".nivel-2 path").css({"fill" : "#197C51"});
//             $(".nivel-3 path").css({"fill" : "#26BC7B"});
//             $(".nivel-3 path.novo-recurso").css({"fill" : "#6F1000"});
//             $(".nivel-3 path.novo-recurso:hover").css({"fill" : "#7C1200"});
//             $(".nivel-3 path.nivel3clicado").removeClass('nivel3clicado'); 
//             $(".nivel-2 path.nivel2clicado").removeClass('nivel2clicado'); 

//         console.log ( '#logo-eberick-v9 clicado' );
//     }); 



//     //se clickar em qq um elemento do nivel 3
//        $('.nivel-3 path').click(function()  { 
//                     $(".nivel-3 path.nivel3clicado").removeClass('nivel3clicado'); 
//                     $(".nivel-2 path.nivel2clicado").removeClass('nivel2clicado'); 
//                     $(this).addClass('nivel3clicado'); 
//               console.log ('.nivel-3 pathclicado');
//             }); 

//     //se clickar em qq um elemento do nivel 2
//        $('.nivel-2 path').click(function()  { 
//                     $(".nivel-2 path.nivel2clicado").removeClass('nivel2clicado'); 
//                     $(".nivel-3 path.nivel3clicado").removeClass('nivel3clicado'); 
//                     $(this).addClass('nivel2clicado'); 
//               console.log ('.nivel-2 pathclicado');
//             }); 




//     }); //(document).ready(function()
