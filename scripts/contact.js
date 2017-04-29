/* global $ */


$("#products-btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#products").offset().top},
        'slow');
});

$("#about-btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#home").offset().top},
        'slow');
});

$("#contact-btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact").offset().top},
        'slow');
});

$(".projects > a").hover(function(){
    $(this).filter(':not(:animated)').animate({ width: "275px", height: "275px" });
    $(this).children().fadeIn(); 
}, function() {
    $(this).children().fadeOut(); 
    $(this).animate({ width: "250px", height: "250px" });
});       

