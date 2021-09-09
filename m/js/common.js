$(document).ready(function(){
    menu();
});

function menu(){
    $('.menuBtn').click(function(){
        $(this).toggleClass('active');
        $('header > div nav').fadeToggle();
    });

    $('header > div nav > ul > li > a').click(function(e){
        e.preventDefault();
        $(this).next().slideToggle();
    })
}