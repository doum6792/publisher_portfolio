$(function(){
    //start click
    $(".getstarted").click(function(){
        $(this).addClass("active")
    })
    //faq_title click
    $(".faq_title").click(function(){
        $(".faq_title").removeClass("active")
        $(this).addClass("active")
        $(".faq_text").slideUp()
        $(this).next().slideDown()
    })
    //faq_membership click
    $(".faq_membership").click(function(){
        $(this).toggleClass("active")
    })
    $("footer").click(function(){
        $("faq_membership").removeClass("active")
    })
    //e-mail click
    $(".input_email").click(function(){
        $('.login_input').children(".email").addClass("active")
        $('.login_input').children(".password").removeClass("active")
    })
    //pw click
    $(".input_pw").click(function(){
        $('.login_input').children(".password").addClass("active")
        $('.login_input').children(".email").removeClass("active")
    })
    //header button click
    $("header button").click(function(){
        $(".modal_login").toggle()
    })
    //section click
    $("section").click(function(){
        $(".modal_login").hide()
        $(".login_input").remove("active")
    })
})