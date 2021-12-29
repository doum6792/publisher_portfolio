$(function(){
    //toggle click
    $(".toggle").click(function(){
        $(".toggle, .overlay, .gnb").toggleClass("active")
    })
    $(".gnb li a").click(function(){
        $(".overlay, .gnb, .toggle").removeClass("active")
    })
        //TypeIt - welcome
/*         $('#typing_txt').typeIt({
            strings: ["UI/UX Designer", "Web Designer", "Web Publisher"], // 타이핑 텍스트 입력
            speed: 100, // 알파벳 타이핑 속도
            startDelay: 3700,
            autoStart: true, // 자동 재생 사용
            breakLines: false, // 줄 바꿈 사용안함
            loop: true
        }) */
        //slick
    $(".web_portfolio_slick").slick({
        autoplay: true,
        dots : true,
        arrows : true,
        fade : true,
        speed: 1000
    })
    
    //scroll
    $(".gnb a, .btn_top").click(function(e){
        $.scrollTo(this.hash ||0, 800)
        e.preventDefault();
      })

    //skill bar
    $(".skill li").hover(function(){
    $(this).find('.skillbar').skillBars({
        from: 0,
		speed: 4000, 
		interval: 100,
		decimals: 0,
        });
    }, function(){
        var kk = $('.skillbar').attr("data-percent1");
        $('.skillbar-bar').css({width: kk + "px"})
        
    })
    //toggle color 
    $(window).scroll(function(){
        if($(window).scrollTop()>980)
        $(".toggle").addClass("color")
        else{
            $(".toggle").removeClass("color")
        }
    })
    //btn_top
    $(window).scroll(function(){
        if($(window).scrollTop()>50)
        $(".btn_top").addClass("active")
        else{
            $(".btn_top").removeClass("active")
        }
    })
    //wow.js
    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
}
)
wow.init();

})