$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
       
    });
  
    $('.navbar .menu li a').click(function(){
        // smooth scroll
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing text
    var typed = new Typed(".typing", {
        strings: ["Front-end developer","UX/UI designer", "Content writer", "Barista"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
   
  
});