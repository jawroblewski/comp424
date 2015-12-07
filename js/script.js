
$(document).ready(function(){

$('#map').show();
$('#GBrooks').hide();
$('#RWright').hide();
$('#MWalker').hide();

$('#Douglas').on("mouseover", function () {
    $('#GBrooks').show();
    $('#figCap1').show();
    $('#RWright').show();
    $('#figCap2').show();
    $('#MWalker').show();
    $('#figCap3').show();
    $("#map").css({ opacity: 0.5 });
});

$('#Douglas').on("mouseout", function () {
    $('#GBrooks').hide();
    $('#figCap1').hide();
    $('#RWright').hide();
    $('#figCap2').hide();
    $('#MWalker').hide();
    $('#figCap3').hide();
    $("#map").css({ opacity: 1 });

});

});
