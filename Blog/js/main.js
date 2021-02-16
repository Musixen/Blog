$(document).ready(function(){

    var nav = $('.nav');
    var toggleCollapse = $('.toggle-collapse');


    /**Click event on toggle menu*/
    toggleCollapse.click(function(){
        nav.toggleClass('collapse');
    })

    //click to scroll top
    $('.move-up span').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    //Discover Button Scroll function
    $('.btn-discover').click(function(){
        $('html, body').animate({
            scrollTop: $('.site-content').offset().top},
            'slow');
    });

    //AOS instance
    AOS.init();


});