$(document).ready(function(){
    $(".burger-nav").on("click", function(){
        $("header nav ul").toggleClass("open");
        $("#taste").toggleClass("display");
    });
});



$('.burger-nav').click(function() {
    var clicks = $(this).data('clicks');
        if (clicks) {
            $(this).css('background-image', 'url(img/hamburger.png)')
    }   else {
            $(this).css('background-image', 'url(img/x.png)')
    }
    $(this).data("clicks", !clicks);
});



