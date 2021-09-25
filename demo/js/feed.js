const searchInput = document.querySelector("#locationSearch");
const searchInputMobile = document.querySelector("#locationSearchResponsive");
const searchInputPost = document.querySelector("#locationSearchPost");

$(document).ready(() => {
    var autocomplete;
    autocomplete = new google.maps.places.Autocomplete(searchInput, {
        types: ['geocode'],
        componentRestrictions: {
            country: "my"
        }
    });
    
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        var near_place = autocomplete.getPlace();
        $(".location .details .inner strong").html(near_place.name);
    });

    var autocompleteMobile;
    autocompleteMobile = new google.maps.places.Autocomplete(searchInputMobile, {
        types: ['geocode'],
        componentRestrictions: {
            country: "my"
        }
    });
    
    google.maps.event.addListener(autocompleteMobile, 'place_changed', function () {
        var near_place = autocompleteMobile.getPlace();
        $(".location .details .inner strong").html(near_place.name);
    });

    var autocompletePost;
    autocompletePost = new google.maps.places.Autocomplete(searchInputPost, {
        types: ['geocode'],
        componentRestrictions: {
            country: "my"
        }
    });
    
    google.maps.event.addListener(autocompletePost, 'place_changed', function () {
        var near_place = autocompletePost.getPlace();
        $(".modal-body .location .details .inner strong").html(near_place.name);
    });

    $(".responsive-nav").hide();

    $(".navbar .responsive-bar .fa-bars").click(function() {
        $(".responsive-nav").slideToggle(200);
    });

    $(".responsive-nav .fa-times").click(function() {
        $(".responsive-nav").slideUp(200);
    });

    var pathname = window.location.href;
    var view = pathname.split("#")[1];

    if (view) {
        $(".feed-wrapper").hide();
        $(`.${view}`).show();
    } else {
        $(".feed-wrapper").hide();
        $(`.community`).show();
    }

    $(".search-bar").hide();
    $(".results").hide();

    $(".comment-section").hide();

    $(".reason-selection .reason").click(function() {
        $(".reason-selection .reason").removeClass("active");
        $(this).addClass("active");
    });

    $(".media-upload input").change(function(e) {
        const files = [e.target.files][0];
        console.log("upload");
        $(".media-upload").append('<button class="btn btn-secondary">Remove attachments</button>');
        for (let i=0;i<files.length;i++) {
            $(".media-upload").append('<div class="preview-wrapper"><img class="preview" src="#"/></div>');
            $(".media-upload .preview-wrapper .preview").eq(i).attr('src', URL.createObjectURL(files[i]));

            $(".media-upload .btn-secondary").click(function() {
                $(".media-upload .preview-wrapper").remove();
                $(".media-upload .btn-secondary").remove();
                $(".media-upload input").val('');
            });
        }
    });

    $(".location .details").click(function() {
        $(this).parent().children(".search-bar").slideToggle(200);
        $(".results").toggle();
        $(".search-bar input").focus();
    });

    $(".image-container").click(function() {
        var src = $(this).children("img").attr("src");
        $(".image-modal .modal-body img").attr("src", src);
    });

    $(".actions .comment").click(function() {
        $(this).parent().parent().children(".comment-section").slideToggle(150);
    });

    const imageGrids = $(".image-grid");
    for (let i=0;i<imageGrids.length;i++) {
        var children = imageGrids.eq(i).children();
        var size = children.length;
        
        if (size > 2) {
            for (let x=2;x<size;x++) {
                children[x].remove();
            }
            children.eq(1).append(`<div class="overlay"><span>View all ${size} images</span></div>`);
        }
    }
    
});