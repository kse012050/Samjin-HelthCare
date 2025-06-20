$(document).ready(function(){

    
    startAnimation();
    mainScrollEvent();
    menuClickEvent();

    $('.nextBtn').click(function(e){
        e.stopPropagation();
        
        if($('.scrollBox div p').length - 1 == $(this).parent().index()){
            $('.scrollBox div p').removeClass('active');
            $('.scrollBox div p').eq(0).addClass('active');
            $('.scrollBox div').animate({
                left : 0
            })
        }else{
            $('.scrollBox div p').removeClass('active');
        
            $(this).parent().next().addClass('active');
            $('.scrollBox div').animate({
                left : -$(this).parent().next().position().left
            })
        }
        console.log();
        console.log($(this).parent().index());
        
    })
    $('.scrollBox div p').click(function(){
        $('.scrollBox div p').removeClass('active');
        $(this).addClass('active');
        $('.scrollBox div').animate({
            left : -$('.scrollBox div p.active').position().left
        })
    });
});

function startAnimation(){
    $('.mainPage > div header').css({
        'top' : -(parseInt($('.mainPage > div header').css('padding-top')) + parseInt($('.mainPage > div header > div > div').height())),
        'height' : $(this).height() + (parseInt($('.mainPage > div header').css('padding-top')) + parseInt($('.mainPage > div header > div > div').height()))
                    + (parseInt($('.mainPage > div header').css('padding-bottom')) + parseInt($('.mainPage > div header > div > nav').height())) 
    })

    setTimeout(function(){
        $('.mainPage > span').css({
            'width' : $(this).width() - (895 + $('.mainPage main').offset().left),
            'opacity' : 0
        })

        $('.mainPage main > div.startAni').css({
            'left' : 0 ,
            'transition-delay' : '0s'
        })
        
        setTimeout(function(){
            $('.mainPage > div header').removeClass('startAni');
            $('.mainPage > div header').removeAttr('style');
            $('.mainPage main > div').removeClass('startAni');
            $('.mainPage main > div').removeAttr('style');
            $('.contentArea ol li:first-child.active .eventBox .imgBox').removeClass('startAni');
            $('.mainPage > span').css('pointer-events','none');
        },1000)
    },1000)
}

function menuClickEvent(){
    $('.menuBtn').click(function(){
        $('header').toggleClass('menuActive');
        $('footer').toggleClass('active');
        if($('.videoArea').hasClass('active') && !$('.careArea').hasClass('active')){
            if($('header').hasClass('menuActive')){
                mainIframe(false);
            }else{
                mainIframe(true);
            }
        }
    })
}

function mainScrollEvent(){
    var mainScrollBoolean = true;
    var mainScrollNumb = 0;
    var mainScrollList = $('.mainPage main > div > *').length;
    var mainScrollFirstList = $('.mainPage main section .contentArea ol li').length - 1;
    var mainScrollListNumb = mainScrollList + mainScrollFirstList;
    var mainScrollPager = '';

    for(var i = 0; i < mainScrollListNumb -1; i++){
        mainScrollPager += '<li>' + (i + 1)  + ' 페이지</li>';
    }

    $('.mainPage main .fullPagelist').html(mainScrollPager);
    $('.mainPage main .fullPagelist').children().first().addClass('active');

    $('.mainPage').on('mousewheel',function(e){
        var delta = e.originalEvent.wheelDelta;
        
        if(mainScrollBoolean){
            if(delta > 0 && mainScrollNumb > 0){
                mainScrollNumb -= 1;
            }else if(delta < 0 && mainScrollNumb < mainScrollListNumb - 1){
                mainScrollNumb += 1;
            }
            mainAnimation(mainScrollNumb,delta);
            mainPager(mainScrollNumb);
            mainScrollBoolean = false;
            setTimeout(function(){
                mainScrollBoolean = true;
            },500);
        }

    });

    $('footer').on('mousewheel',function(e){
        e.stopPropagation();
    });

    $('.fullPagelist li').click(function(){
        $('.fullPagelist li').removeClass('active')
        $(this).addClass('active');
        mainAnimation($(this).index());
    });
    
    function mainAnimation(idx,delta){
        // console.log(idx);
        if(idx <= (mainScrollFirstList)){
            $('header').removeClass('active');
            $('.mainPage main > div > *').removeClass('active');
            $('.mainPage main > div section .contentArea ol li').removeClass('active');
            $('.mainPage main > div section .contentArea ol li').eq(idx).addClass('active');
            if(idx == mainScrollFirstList){
                $('.mainPage').addClass('BGActive');
                $('.mainPage main .monitorArea .contentArea ol li:nth-child(3) .eventBox').css({
                    'bottom' : ($('.mainPage main .monitorArea .contentArea ol li:nth-child(3)').offset().top + $('.mainPage main .monitorArea .contentArea ol li:nth-child(3)').height()) - $(window).height()
                })
            }else{
                $('.mainPage').removeClass('BGActive');
                $('.mainPage main .monitorArea .contentArea ol li:nth-child(3) .eventBox').removeAttr('style');
            }
            $('.monitorArea .pageArea span:first-child').html('0' + (idx + 1));
            mainIframe(false);
        }else{
            $('.monitorArea .pageArea span:first-child').html('0' + (idx + 1));
            if(idx == 3){
                mainIframe(true);
            }else{
                mainIframe(false);
            }
            idx = idx - (mainScrollFirstList);

            if(delta > 0){
                $('.mainPage main > div > *').eq(idx + 1).removeClass('active');
            }else{
                $('header').addClass('active');
                $('.mainPage main > div > *').eq(idx).addClass('active');
            }
            
        }
    }

    function mainPager(idx){
        $('.mainPage main .fullPagelist').children().eq(idx).addClass('active').siblings().removeClass('active');
    }

}
function mainIframe(boolean){
    if(boolean){
        var vid = $('video');
        console.log(vid);
        $('video').trigger('play');
        /* vid.autoplay = true;
        vid.load(); */
        // $('.videoArea iframe')[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}','*');
    }else{
        $('video').trigger('pause');
        // $('.videoArea iframe')[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
    }
}