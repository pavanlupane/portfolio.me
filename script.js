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
                    /*console.log('True');
                    console.log('Div top value::' + $("#skillsDivContainer").offset().top );
                    console.log('travelDiv top value::' + $("#travelDiv").offset().top );
                    console.log('The other value::'+ ($(window).scrollTop() + $(window).outerHeight()- 200));*/
                    $('#skillsMeter').show();
                    
                }  else {
                   /*console.log('False');
                    console.log('Div top value::' + $("#skillsDivContainer").offset().top );
                    console.log('travelDiv top value::' + $("#travelDiv").offset().top );
                    console.log('The other value::'+ ($(window).scrollTop() + $(window).outerHeight() - 200));*/
                    $('#skillsMeter').hide();
                }
            };
            setInterval(myRepeatFunction, 200);
    
function mapInitialize() {

    var mapCanvas = document.getElementById('googleMap');
    var myLatLng = {lat: 34.032726, lng: -118.282182};
    var mapOptions = {
      center: new google.maps.LatLng(34.032726, -118.282182),
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var marker = new google.maps.Marker({
    position: myLatLng,
    map: mapCanvas,
    animation: google.maps.Animation.DROP,
    title: 'Pavan Lupane'
  });
    var map = new google.maps.Map(mapCanvas,mapOptions);
    marker.setMap(map);

}

//google.maps.event.addDomListener(window, 'load', mapInitialize);
    mapInitialize();
    
function shootEmailFunction(){
    //alert("Form submitted!");
    //console.log( $("#myForm").serialize() );
    var that = $("#contactForm"),
        url=that.attr('action'),
        method=that.attr('method'),
        data=that.serializeArray();

    console.log( data );

    $.ajax({
        url: url,
        type: method,
        data: data,
        success: function(response){
            alert("Success!");
        }
    });
}
});

