$(function(){
    // top_banner
    $(".close").click(function(){
        $(".top_banner").slideUp();
    })
    // gnb slide
    $(".gnb").mouseenter(function(){
        $(".header_b").stop().animate({height : "340px"})
    })//
    $(".header_b").mouseleave(function(){
        $(".header_b").stop().animate({height : "103px"})
    })
    //slick
    $(".main_visual").slick({
        autoplay: true,
        autoplaySpeed : 3000,
        dots:true
    })
    // tab
    $(".section5_inner ul li").click(function(){
        $(".section5_inner ul li").toggleClass("on")
    })
    //a_event
    $("a").click(function(e){
        if( $("a").has("#")  || $("a").has("") ){ 
            e.preventDefault();
        }
    })


})//jquery