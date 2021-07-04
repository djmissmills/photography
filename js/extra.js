//Keyboard Navigation for slider
var Webflow = Webflow || [];
Webflow.push(function () {

$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
          $('.w-slider-arrow-left').trigger('tap');
          break;
        case 38: // up
          break;
        case 39: // right
          $('.w-slider-arrow-right').trigger('tap');
          break;
        case 40: // down
          break;
        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});
});



$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});


