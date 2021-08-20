$(document).ready(function(){

   

    startAnimation();
    menuClickEvent();
    mainScrollEvent();
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
        var menuText = '';
        $('header').toggleClass('menuActive');
        $('footer').toggleClass('active');
    /*     if($('header').hasClass('menuActive')){
            menuText = 'close';
        }else{
            menuText = 'menu';
        } */
      /*   setTimeout(function(){
            $('.menuBtn').children().eq(0).html(menuText);
        },300) */
    })
}

function mainScrollEvent(){
    var mainScrollBoolean = true;
    var mainScrollNumb = 0;
    var mainScrollList = $('.mainPage main > div > *').length;
    var mainScrollFirstList = $('.mainPage main section .contentArea ol li').length - 1;
    var mainScrollListNumb = mainScrollList + mainScrollFirstList;
    var mainScrollPager = '';

    for(var i = 0; i < mainScrollListNumb; i++){
        mainScrollPager += '<li>' + (i + 1)  + ' 페이지</li>';
    }

    $('.mainPage main .fullPager').html(mainScrollPager);
    $('.mainPage main .fullPager').children().first().addClass('active');

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
    })
    
    function mainAnimation(idx,delta){
        // console.log(idx);
        if(idx <= (mainScrollFirstList)){
            $('header').removeClass('active');
            $('.mainPage main > div > *').removeClass('active');
            $('.mainPage main > div section .contentArea ol li').removeClass('active');
            $('.mainPage main > div section .contentArea ol li').eq(idx).addClass('active');
            if(idx == mainScrollFirstList){
                $('.mainPage').addClass('BGActive');
            }else{
                $('.mainPage').removeClass('BGActive');
            }
            $('.monitorArea .pageArea span:first-child').html('0' + (idx + 1));
            mainIframe(idx);
        }else{
            mainIframe(idx);
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
        $('.mainPage main .fullPager').children().eq(idx).addClass('active').siblings().removeClass('active');
    }

    function mainIframe(idx){
        console.log(idx);
        if(idx == 3){
            console.log('시작');
            $('.videoArea iframe')[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}','*');
        }else{
            $('.videoArea iframe')[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}','*');
        }
    }
}