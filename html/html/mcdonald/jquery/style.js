$(document).ready(function(){
    // bxSlider
    $(".content1").bxSlider({
        auto: true,
        speed: 500,
        pause: 4000,
        mode: 'horizontal',
        // autoControls: true,
        page: true,
        caption: true
    })
    // menu hover
    $(".main > li, .sub, .bg").mouseover(function(){
        $(".sub, .bg").stop().slideDown()
    })
    $(".main > li, .sub, .bg").mouseleave(function(){
        $(".sub, .bg").stop().slideUp();
    })
})