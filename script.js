$(function() {
    var pull        = $('#pull');
        menu        = $('nav ul');
        menuHeight  = menu.height();
 
    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    
    $(window).resize(function(){
    var w = $(window).width();
    if(w > 320 && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
    }); 
    
    var myRepeatFunction = function (){
                if($("#skillsDivContainer").offset().top < $(window).scrollTop() + $(window).outerHeight()) {
                    //console.log('True');
                    $('#skillsMeter').show();
                    
                } else {
                   // console.log('False');
                    $('#skillsMeter').hide();
                }
            };
            setInterval(myRepeatFunction, 300);
});