$(document).ready(function() {
    $("#menu").on("click", function(e) {
        if (getNodeNode(e.target) == "span") {
            slideSubMenu($(e.target).next());
        }
        toggleMenuClass($(e.target).parent());
    });
});

function getNodeNode(node) {
    return !!node.nodeName ? node.nodeName.toLowerCase() : "";
}

function slideSubMenu(sub_menu) {
    if (!sub_menu) {
        return;
    }
    if (sub_menu.css("display") == "block") {
        sub_menu.slideUp("fast");
    } else {
        sub_menu.slideDown("fast");
    }
}

function toggleMenuClass(_parent) {
    _parent.toggleClass("active").siblings().removeClass("active");
}