$( document ).ready(function() {
    //$('#menuOverlay').toggle();

    $('#menu-wrap').on('click', function(){
    	//alert('asdf');
    	$('#menuOverlay').toggle();
      	//$('#menuOverlay').css('display', 'block');

    });

    $('#menuOverlay').on('click', function(){
    	$('#menuOverlay').toggle();
    })

});