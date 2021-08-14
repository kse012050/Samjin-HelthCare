$(document).ready(function(){
    var mainScrollBoolean = true;
    var mainScrollNumb = 0;
    var mainScrollList = $('.mainPage main > *').length;
    var mainScrollFirstList = $('.mainPage main section .contentArea ol li').length;
    var mainScrollListNumb = mainScrollList + mainScrollFirstList - 1;
    $('.mainPage').on('mousewheel',function(e){
        var delta = e.originalEvent.wheelDelta;
        if(delta > 0 && mainScrollNumb > 0){
            mainScrollNumb -= 1;
        }else if(delta < 0 && mainScrollNumb < mainScrollListNumb){
            mainScrollNumb += 1;
        }
        mainAnimation(mainScrollNumb);
    });
    
    function mainAnimation(idx){
        if(idx < (mainScrollFirstList)){
            $('header').removeClass('active');
            $('.mainPage main > *').removeClass('active');
            $('.mainPage main section .contentArea ol li').removeClass('active');
            $('.mainPage main section .contentArea ol li').eq(idx).addClass('active');
        }else{
            $('header').addClass('active');
            idx = idx - (mainScrollFirstList - 1);
            console.log(idx);
            $('.mainPage main > *').eq(idx).addClass('active');
        }
    }
});