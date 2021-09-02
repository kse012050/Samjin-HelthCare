$(document).ready(function(){
    $('.subPage header > div nav > ul').hover(function(){
        $('.subPage header > div nav > ul > li ul').stop().slideDown();
    },function(){
        $('.subPage header > div nav > ul > li ul').stop().slideUp();
    })
})