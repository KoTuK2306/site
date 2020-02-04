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
$(".profile__text2").click(function(event) {
    $("body").css("overflow-y","hidden");
    $(".profile__window").toggleClass("clicked4");
});