/* global $ */

// this file handles all the page's animations

var slide = 0;

var imgSources = [
    "images/rose.jpg",
    "images/poinsettia.jpg",
    "images/lily.jpg",
    "images/daffodil.jpg"
    ];



$("#portfolio-btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#portfolio").offset().top},
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


$(".next").click(function(){
    slide++;
    if (slide > 3) slide = 0;
    $(".slideshow-container > img").attr("src", imgSources[slide]);
})
;
$(".prev").click(function(){
    slide--;
    if (slide < 0) slide = 3;
    $(".slideshow-container > img").attr("src", imgSources[slide]);
});