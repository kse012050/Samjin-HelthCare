$(document).ready(function(){
    menu();
    tab();
    FAQsTab();
    contactUsFIle();
});

function menu(){
    $('.menuBtn').click(function(){
        $(this).toggleClass('active');
        $('header > div nav').fadeToggle();
    });

    $('header > div nav > ul > li > a').click(function(e){
        if($(this).next().length){
            e.preventDefault();
            $(this).next().slideToggle();
        }
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
    // $('.FAQsArea .contentArea .tabArea > li ul li > button').click(function(){
    //     $(this).parent().toggleClass('active');
    //     $(this).next().slideToggle();
    // })
    $('.FAQsArea .contentArea .tabContents ul li button').click(function(){
        $(this).toggleClass('active');
        $(this).next().stop().slideToggle();  
    });
}

function contactUsFIle(){
    $('input[type="file"]').change(function(){
        $(this).next().val($(this).val());
    })
}