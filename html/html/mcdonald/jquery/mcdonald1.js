$(function(){
    $(".main > li, .sub, .bg").mouseover(function(){
        $(".sub, .bg").stop().slideDown()
    })
    $(".main > li, .sub, .bg").mouseleave(function(){
        $(".sub, .bg").stop().slideUp();
    })
  })