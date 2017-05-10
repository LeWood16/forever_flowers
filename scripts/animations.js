/* global $ */
$(document).ready(function(){
  $(".info").hide(); 
});

$("#category-container > a").hover(function(){
    $(this).children(".info").slideDown(); 
}, function() {
    $(this).children(".info").slideUp(); 
}); 

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
       

