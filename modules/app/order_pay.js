var $=require("jquery");
$(function(){
  $(".g-bank__item").click(function(){
    $(".g-bank__chose").removeClass("checked");
    $(this).prev().addClass("checked");
  });
  $(".g-bank__list i").click(function(){
    $(".g-bank__list i").removeClass("checked");
    $(this).addClass("checked");
  });
});
