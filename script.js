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
               if(($("#skillsDivContainer").offset().top < $(window).scrollTop() + $(window).outerHeight() - 200) &&
                      ($("#travelDiv").offset().top > $(window).scrollTop() + $(window).outerHeight()-400)) {
                    console.log('True');
                    console.log('Div top value::' + $("#skillsDivContainer").offset().top );
                    console.log('travelDiv top value::' + $("#travelDiv").offset().top );
                    console.log('The other value::'+ ($(window).scrollTop() + $(window).outerHeight()- 200));
                    $('#skillsMeter').show();
                    
                }  else {
                   console.log('False');
                    console.log('Div top value::' + $("#skillsDivContainer").offset().top );
                    console.log('travelDiv top value::' + $("#travelDiv").offset().top );
                    console.log('The other value::'+ ($(window).scrollTop() + $(window).outerHeight() - 200));
                    $('#skillsMeter').hide();
                }
            };
            setInterval(myRepeatFunction, 200);
});