$(document).ready(function(){
    menu();
    tab();
    FAQsTab();
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

function tab(){
    var tabIdx = 0;
    $('.tabBtn li button').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active')
        tabIdx = $(this).parent().index();
        // $('.tabArea > li').eq(tabIdx).addClass('active').siblings().removeClass('active');
        $('.tabArea > li').eq(tabIdx).fadeIn().siblings().hide();
    })
}

function FAQsTab(){
    $('.FAQsArea .contentArea .tabArea > li ul li > button').click(function(){
        $(this).parent().toggleClass('active');
        $(this).next().slideToggle();
    })
}