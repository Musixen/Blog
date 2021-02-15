$(document).ready(function(){

    var nav = $('.nav');
    var toggleCollapse = $('.toggle-collapse');


    /**Click event on toggle menu*/
    toggleCollapse.click(function(){
        nav.toggleClass('collapse');
    })


});