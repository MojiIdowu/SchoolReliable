//active header to appear
$(document).ready(function(){

    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $("#header").addClass("active-header");
            $(".menu-link").addClass("active-menu-links");
            $("#header-img").attr("src", "https://i.ibb.co/0jM3ZvH/reverse-black.png");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $("#header").removeClass("active-header");
            $(".menu-link").removeClass("active-menu-links");
            $("#header-img").attr("src", "https://i.ibb.co/LxGJ5gF/reverse-white.png");
        }
    });

    // Responsive menu
    $("#responsive-nav-bar").hide();

    $("#image-button-black").click(function(){
        $("#responsive-nav-bar").slideToggle();
    });

    $("#responsive-home-item , #responsive-features-item , #responsive-products-item , #responsive-media-item , #responsive-pricing-item").click(function(){
        $("#responsive-nav-bar").slideToggle(200);
    })







    // Visibility variables
    var firstVisible = firstProduct.is(':visible');
    var secondVisible = secondProduct.is(':visible');
    var thirdVisible = thirdProduct.is(':visible');
    var fourthVisible = fourthProduct.is(':visible');


    // Visible and Hidden Sections .click function
    $(firstButton).click(function(){
        $('.product-content').hide();
        $(firstProduct).fadeIn(600);
        buttons.removeClass('product-button-active');
        firstButton.addClass('product-button-active');
    });

    $(secondButton).click(function(){
        $('.product-content').hide();
        $(secondProduct).fadeIn(600);
        $(secondProduct).css('visibility', 'visible');
        buttons.removeClass('product-button-active');
        secondButton.addClass('product-button-active');
    });

    $(thirdButton).click(function(){
        $('.product-content').hide();
        $(thirdProduct).fadeIn(600);
        buttons.removeClass('product-button-active');
        thirdButton.addClass('product-button-active');
    });

    $(fourthButton).click(function(){
        $('.product-content').hide();
        $(fourthProduct).fadeIn(600);
        buttons.removeClass('product-button-active');
        fourthButton.addClass('product-button-active');
    });



    // First Button Styling hidden/visible
    if (firstVisible === true) {
        firstButton.addClass('product-button-active');
    }

});
///fade in and out segment
function Utils() {}
Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();

        if (fullyInView === true) {
            return pageTop < elementTop && pageBottom > elementBottom;
        } else {
            return elementTop <= pageBottom && elementBottom >= pageTop;
        }
    }
};

var Utils = new Utils();
$(window).on("load", addFadeIn());

$(window).scroll(function () {
    addFadeIn(true);
});

function addFadeIn(repeat) {
    var classToFadeIn = ".will-fadeIn";

    $(classToFadeIn).each(function (index) {
        var isElementInView = Utils.isElementInView($(this), false);
        if (isElementInView) {
            if (!$(this).hasClass("fadeInRight") && !$(this).hasClass("fadeInLeft")) {
                if (index % 2 == 0) $(this).addClass("fadeInRight");
                else $(this).addClass("fadeInLeft");
            }
        } else if (repeat) {
            $(this).removeClass("fadeInRight");
            $(this).removeClass("fadeInLeft");
        }
    });
}
///

////


