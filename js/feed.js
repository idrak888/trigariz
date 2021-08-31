$(document).ready(() => {
    var view = "community";
    $(".feed-wrapper").hide();
    $(`.${view}`).show();

    $(".search-bar").hide();
    $(".results").hide();

    $(".links .link").click(function() {
        view = $(this).attr("id");

        $(".links .link").removeClass("active");
        $(this).addClass("active");

        $(".feed-wrapper").hide();
        $(`.${view}`).show();
    });

    $(".details").click(function() {
        $(".search-bar").toggle();
        $(".results").toggle();
        $(".search-bar input").focus();
    });

    $(".search-bar input").on("input", function() {
        $(".results").empty();

        fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${$(this).val()}&types=geocode&location=4.5,102&radius=282177.34&key=AIzaSyD__Krjk05sSt3-xK4_Uez3s_m_8ZXzJ4Q`).then(res => res.json()).then(data => {
            var locations = data.predictions.filter(item => item.description.includes("Malaysia"));
            var newHTML = [];

            $.each(locations, function(index, value) {
                newHTML.push('<span>' + value.terms[0].value + '</span>');

                // console.log(value.place_id);
                // use place id to get lat and lon 
                // lat and lon within 0.01 magnitude used as filter for posts
            });
            $(".results").html(newHTML.join(""));
        }); 
    });
});