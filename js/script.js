$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items : 1,
        nav : true,
        navText : ['<i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i>','<i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>']
    });
    $('#trigger_menu').click(function(e){
        e.preventDefault();
        $('.menu').fadeIn('fast');
    });
    $('#close_menu').click(function(e){
        e.preventDefault();
        $('.menu').fadeOut('fast');
    });
});