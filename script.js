
$(document).ready(function(){

$('#map').show();
$('#GBrooks').hide();
$('#HFuller').hide();
$('#SSilverstein').hide();

$('#Douglas').on("mouseover", function () {
    $('#GBrooks').show();
    $('#figCap1').show();
    $('#HFuller').show();
    $('#figCap2').show();
    $('#SSilverstein').show();
    $('#figCap3').show();
    $("#map").css({ opacity: 0.5 });
});

$('#Douglas').on("mouseout", function () {
    $('#GBrooks').hide();
    $('#figCap1').hide();
    $('#HFuller').hide();
    $('#figCap2').hide();
    $('#SSilverstein').hide();
    $('#figCap3').hide();
    $("#map").css({ opacity: 1 });

});
    
});
