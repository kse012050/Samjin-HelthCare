$(document).ready(function(){
    subMenu();
    tab(); 

    FAQsTab();
})

function subMenu(){
    $('.subPage header > div nav > ul').hover(function(){
        $('.subPage header > div nav > ul > li ul').stop().slideDown();
    },function(){
        $('.subPage header > div nav > ul > li ul').stop().slideUp();
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
    /* $('.FAQsArea .contentArea .tabArea > li ul li > button').click(function(){
        $(this).parent().toggleClass('active');
        $(this).next().slideToggle();
    }) */

    $('.FAQsArea .contentArea .tabContents ul li button').click(function(){
        $(this).next().stop().slideToggle();  
    });
}