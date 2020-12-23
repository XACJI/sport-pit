$('.gamburger').click(function(){
    if($('.header .navigation').css('display') == 'none'){
        $('.header .navigation').fadeIn(300).css('display','flex');
    }else{
        $('.header .navigation').fadeOut(300);
    }
});