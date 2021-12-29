$(function(){

    // util menu
    $(".util_myca").hover(function(){
        $(".my").stop().slideDown();

    }, function(){
        $(".my").stop().slideUp();
    })


    $(".gnb_p").mouseenter(function(){
        $(".d_wrap").stop().slideDown()
    })//
    $(".gnb_p").mouseleave(function(){
        $(".d_wrap").stop().slideUp()
    })


    $(".main_visual").slick({
        autoplay: true,
        autoplaySpeed : 3000,
        dots : true,
        swipe:false,
        arrows: false    })

    sw = 0;

    $(".stop").click(function(){
        if(sw == 0){
            $(".stop").addClass("on");
            $(".main_visual").slick("slickPause")
            sw=1
        } else{
            $(".stop").removeClass("on");
            $(".main_visual").slick("slickPlay");
            sw =0;
        }
    })//


    $(".photo_wrap, .banner1, .review1").slick({
        autoplay: true,
        arrows: false,
        dots: true
    })

    $(".pause").click(function(){
        if(sw == 0){
            $(".pause").addClass("on")
            $(".photo_wrap").slick("slickPause")
            sw=1;
        } else{
            $(".pause").removeClass("on")
            $(".photo_wrap").slick("slickPlay")
            sw=0;
        }
    })

    $(".banner .stop1").click(function(){
        if(sw == 0){
            $(".stop1").addClass("on")
            $(".banner1").slick("slickPause")
            sw=1;
        } else{
            $(".stop1").removeClass("on")
            $(".banner1").slick("slickPlay")
            sw=0;
        }
    })//
    $(".review .stop1").click(function(){
        if(sw == 0){
            $(".stop1").addClass("on")
            $(".review1").slick("slickPause")
            sw=1;
        } else{
            $(".stop1").removeClass("on")
            $(".review1").slick("slickPlay")
            sw=0;
        }
    })//

    $(".product_slick").slick({
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll : 2,
        arrows:false,
        dots:true
    })

    $(".e_stop").click(function(){
        if(sw == 0){
            $(".e_stop").addClass("on")
            $(".product_slick").slick("slickPause")
            sw=1;
        } else{
            $(".e_stop").removeClass("on")
            $(".product_slick").slick("slickPlay")
            sw=0;
        }
    })//


    $(".notice").slick({
        autoplay : true,
        arrows:true,
        dots:false,
        vertical : true
    })//

    

    $(".l_stop").click(function(){
        if(sw == 0){
            $(".l_stop").addClass("on")
            $(".notice").slick("slickPause")
            sw=1;
        } else{
            $(".l_stop").removeClass("on")
            $(".notice").slick("slickPlay")
            sw=0;
        }
    })//


})//jquery