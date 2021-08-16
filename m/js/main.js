$(document).ready(function(){
    menuClickEvent();
    mainScrollEvent();
});

function menuClickEvent(){
    $('.menuBtn').click(function(){
        $('header').toggleClass('menuActive');
    })
}

function mainScrollEvent(){
    var mainScrollBoolean = true;
    var mainScrollNumb = 0;
    var mainScrollList = $('.mainPage main > div > *').length;
    var mainScrollFirstList = $('.mainPage main section .contentArea ol li').length - 1;
    var mainScrollListNumb = mainScrollList + mainScrollFirstList;
    var touchStartEventX = 0;
    var touchStartEventY = 0;
    var touchCompareX = 0;
    var touchCompareY = 0;

    $('.mainPage').on('touchstart',function(e){
        touchStartEventX = e.changedTouches[0].clientX;
        touchStartEventY = e.changedTouches[0].clientY;
    })

    $('.mainPage').on('touchend',function(e){
        var delta = e.changedTouches[0].clientY - touchStartEventY;
        touchCompareX = Math.abs(touchStartEventX - e.changedTouches[0].clientX);
        touchCompareY = Math.abs(touchStartEventY - e.changedTouches[0].clientY);
        
        if(touchCompareX < touchCompareY){
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
        }

    });
    
    function mainAnimation(idx,delta){
        if(idx <= (mainScrollFirstList)){
            $('.mainPage main > div > *').removeClass('active');
            $('.mainPage main > div section .contentArea ol li').removeClass('active');
            $('.mainPage main > div section .contentArea ol li').eq(idx).addClass('active');
            $('.monitorArea .pageArea span:first-child').html('0' + (idx + 1));
            if(idx == mainScrollFirstList){
                $('.mainPage').addClass('active');
            }else{
                $('.mainPage').removeClass('active');
            }
        }else{
            idx = idx - (mainScrollFirstList);
            if(delta > 0){
                $('.mainPage main > div > *').eq(idx + 1).removeClass('active');
            }else{
                $('.mainPage main > div > *').eq(idx).addClass('active');
            }
        }
    }

    function mainPager(idx){
        $('.mainPage main .fullPager').children().eq(idx).addClass('active').siblings().removeClass('active');
    }
}