var $=require("jquery");
var modal=require('modules/lib/modal.min');
require('modules/lib/modal.min.css');
$(function(){
  $(".g-bank__item").click(function(){
    $(".g-bank__chose").removeClass("checked");
    $(this).prev().addClass("checked");
  });
  $(".g-bank__list i").click(function(){
    $(".g-bank__list i").removeClass("checked");
    $(this).addClass("checked");
  });
  $(".g-payment__submitBtn").click(function(){
    if($(".checked").length==0){
      alert("请选择一种支付方式！");
    }else{
      $("#myModal").modal("show");
      var modalHeight=document.documentElement.clientHeight-$("#myModal").find(".modal-dialog").height();
      $("#myModal").find(".modal-dialog").css("margin-top",modalHeight/2);
    }
    //测试
    setTimeout(function(){location.href='pay_result.html';},5000);
  });
  $("#dismiss").click(function(){
    location.href='store_course.html';
  });
});
