$(".apples").click(function() {
    $(".potato").css("display", "block");
    $(".apples").css("display", "none");
    $(".hi").hide();
    $(".bottle").show();
   
    
});

$(".potato").click(function(){
    $(".bottle").css("display","block");
    $(".potato").css("display","none");
    $(".bottle").hide();
     $(".done").show();
});