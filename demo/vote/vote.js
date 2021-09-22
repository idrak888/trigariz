$(document).ready(() => {

    $(".links-wrapper .link").click(function() {
        view = $(this).attr("id");

        $(".links .link").removeClass("active");
        $(this).addClass("active");

        $(".feed-wrapper").hide();
        $(`.${view}`).show();

        $(".responsive-nav").hide();
    });

    $(".links-wrapper .dropdown-wrapper").hide();
    $(".links-wrapper .dropdown-link").click(function() {
        $(".links-wrapper .dropdown-wrapper").slideToggle(150);
    });

});