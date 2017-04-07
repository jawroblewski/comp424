
$(document).ready(function(){

$('#quote1').hide();
$('#quote2').hide();
$('#quote3').hide();


function quoteLoop(){
  $('#quote1').fadeIn(1500).delay(3500).fadeOut(1500);
  $('#quote2').delay(7500).fadeIn(1500).delay(3500).fadeOut(1500);
  $('#quote3').delay(14500).fadeIn(1500).delay(3500).fadeOut(1500);
}

quoteLoop();
setInterval(quoteLoop,22000);



});
