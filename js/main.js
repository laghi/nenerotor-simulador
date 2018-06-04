$(document).ready(function() {
    $(".toggle-aside").click(function(event) {
        $('.simulador__aside').toggleClass('simulador__aside--open');
        $('.simulador__aside__backdrop').toggleClass('simulador__aside__backdrop--open');
        $('body').toggleClass('simulador__aside__backdrop__body--open');
        event.preventDefault();
    });
});

 