$("div").css("background", "purple") //worked
$(".highlight").css("width", "200px") //worked
$("#third").css({border: "3px solid orange"}) //this is the proper format for border 3 arguments
$("body + div").css("color", "pink")

//$("body:first").css("color", "pink");
$("div:first-of-type").css("color", "pink");

