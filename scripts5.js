$(document).ready(function() {
    $(".profile__text").click(function(event) {
        $("body").css("overflow-y","hidden");
        $(".profile__window").toggleClass("clicked4");
    });
    $(".button").click(function(event) {
        $("body").css("overflow-y","visible");
        $(".profile__window").removeClass("clicked4");
    });
    $(".cross").click(function(event) {
        $("body").css("overflow-y","visible");
        $(".profile__window").removeClass("clicked4");
    });
    $("#wrap").click(function(event) {
        $(".justText").toggleClass("clicked");
    });
    $(".block__title").click(function(event) {
        if($(".block").hasClass("one")){
            $(".block__title").not($(this)).removeClass("active1");
            $(".block__text").not($(this).next()).slideUp(300);
        }
        $(this).toggleClass("active1").next().slideToggle(300);
    });
});




    