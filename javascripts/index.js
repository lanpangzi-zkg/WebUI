$(document).ready(function() {
    init();
});
function init(){
   $("#menu>.menu-item").on("click", function(e) {
        var _this = $(this);
        slideSubMenu(_this.find(".sub-menu"));
        toggleMenuClass(_this);
    }); 
   $(window).on("scroll",function(){
    console.log($(window).scrollTop());
   });
}
function slideSubMenu(sub_menu) {
    if (!sub_menu) {
        return;
    }
    if (isVisible(sub_menu)) {
        sub_menu.slideUp("fast");
    } else {
        sub_menu.slideDown("fast");
    }
}

function toggleMenuClass(_parent) {
    _parent.find(".menu-arrow").toggleClass("arrow-down");
    _parent.toggleClass("active").siblings().removeClass("active");
}
function isVisible($ele){
    return $ele.css("display")=="block";
}