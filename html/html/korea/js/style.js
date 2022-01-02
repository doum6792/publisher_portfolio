$(function(){
  //header scroll  
  $(window).scroll(function(){
    if ($(window).scrollTop()>50) {
      $("header, .gototop").addClass("active")
      
    } else {
      $("header, .gototop").removeClass("active")
    }
  })
  //sliding
  $(".gnb a, .gototop").click(function(e){
    $.scrollTo(this.hash ||0, 800)
    e.preventDefault();
  })
  // slick 
    $('.myslider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }

        ]
      });
      // trigger
      $(".trigger").click(function(){
        $(this).toggleClass("active")
        $(".gnb").toggleClass("active")
        $(".bg").toggleClass("active")
      })
      $(".gnb li a").click(function(){
        $(".gnb").removeClass("active")
        $(".trigger").removeClass("active")
        $(".bg").removeClass("active")
      })
      //festival 
      $(".btns a").click(function(){
        $(".btns a").removeClass("active")
        $(this).addClass("active")
      })
      $(".btns a:last-child").click(function(){
        $(".festival").addClass("active")
      })
      $(".btns a:first-child").click(function(){
        $(".festival").removeClass("active")
      })
     
})