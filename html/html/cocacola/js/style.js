$(function(){
    $(".pop_close").click(function(){
        $(".popup").hide()
    })  
    $('.img_slide').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 800,
        fade: true,
        pauseOnHover: false,
        cssEase: 'linear'
    });
        //TypeIt - welcome
    $('#typing').typeIt({
	strings: ["Business strategy.", "Innovation.", "Creative Idea.","Coke-Cola"], // 타이핑 텍스트 입력
	speed: 100, // 알파벳 타이핑 속도
	autoStart: true, // 자동 재생 사용
	breakLines: false, // 줄 바꿈 사용안함
    loop: true
});
$(".main li a, .btn_top").click(function(e){
    $.scrollTo(this.hash ||0, 800)
    e.preventDefault();
  })
$('.brand_list').slick({
    arrows: true,
    dots: true,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
});
wow = new WOW({
    boxClass: 'wow',
    offset: 150,
    mobile: true
})
wow.init();

$(window).scroll(function(){
    if ($(window).scrollTop() > 50) {
        $('.btn_top').addClass('active')
    }
    else {
        $('.btn_top').removeClass('active')
    }
})
$(".fa-bars").click(function(){
    $(".main").addClass("active")
})
$(".exit").click(function(){
    $(".main").removeClass("active")
})
$(".main li a, section").click(function(){
    $(".main").removeClass("active")
})
})


