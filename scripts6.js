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
$(".button2").click(function(event) {
    $(".submitting").toggleClass("clicked2");
    $(".input1").val("");
    $(".input2").val("");
    setTimeout (function(){
        $(".submitting").removeClass("clicked2");
     }, 2000);
    
});
$('form').submit(function () {
    return false;
});
