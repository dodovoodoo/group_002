var $ = require('jquery');
var modal=require('modules/lib/modal.min');
require('modules/lib/modal.min.css');
require('modules/lib/jquery.validate.min');
var address=require("modules/app/addresss");
$(function () {
  /**全选**/
  $(document).delegate('#sum_checkBox,#sum_checkBox_1', 'click', function () {
    if (this.checked) {
      $('.u-checkBox').prop("checked", true);
      $('.u-checkBox').parents(".g-checklist__item").addClass("checked");
      syncTotal();
    } else {
      $('.u-checkBox').parents(".g-checklist__item").removeClass("checked");
      $('.u-checkBox').removeAttr('checked');
      $(".g-checklist__total").text(0);
      syncTotal();
    }
  });
  /**选择单项**/
  $(document).delegate('.g-checklist__item .u-checkBox', 'click', function () {
    if (this.checked) {
      $(this).parents(".g-checklist__item").addClass("checked");
    }
    else{
      $(this).parents(".g-checklist__item").removeClass("checked");
    }
    syncTotal();
  });
  /**默认全选**/
  $("#sum_checkBox").click();
  /**加载总价**/
  syncTotal();
  /**减法**/
  $(".u-input__count__min").click(function(){
    var valElem=$(this).siblings(".u-input__count");
    var valNum=parseInt($(valElem).val())==1?1:(parseInt($(valElem).val())-1);
    $(valElem).val(valNum);
    var subtotal=parseInt($(this).parents(".g-checklist__item").find(".g-checklist__unit").text())*valNum;
    $(this).parents(".g-checklist__item").find(".g-checklist__subtotal").text(subtotal);
    syncTotal();
  });
  /**加法**/
  $(".u-input__count__max").click(function(){
    var valElem=$(this).siblings(".u-input__count");
    var valNum=parseInt($(valElem).val())+1;
    $(valElem).val(valNum);
    var subtotal=parseInt($(this).parents(".g-checklist__item").find(".g-checklist__unit").text())*valNum;
    $(this).parents(".g-checklist__item").find(".g-checklist__subtotal").text(subtotal);
    syncTotal();
  });
  /**移除产品**/
  $(".g-checklist__del").click(function(){
    if(confirm("是否删除该商品？")){
      var temp=$(this).parents(".g-checklist__item");
      $(temp).remove();
      syncTotal();
    }
  });
  /**移除所选商品**/
  $(".g-checklist__del_chose").click(function(){
    if(confirm("是否删除勾选的商品")){
      var temp=$(".checked");
      $(temp).remove();
      syncTotal();
      if($(".g-checklist__item").length==0){
        location.href="index.html";
      }
    }
  });
  /**点击去支付**/
  $(".g-checklist__pay").click(function(){
    $("#myModal").modal('show');
    var modalHeight=document.documentElement.clientHeight-$("#myModal").find(".modal-dialog").height();
    $("#myModal").find(".modal-dialog").css("margin-top",modalHeight/2);
  });
  /**同步总计数据**/
  function syncTotal(){
    var summy=0;
    var arr=$(".g-checklist__item.checked").find(".g-checklist__subtotal");
    for(var k=0;k< arr.length;k++ ){
      summy+=parseInt($(arr[k]).text());
    }
    $(".g-checklist__total").text(summy);
    var count=0;
    var arr1=$(".g-checklist__item.checked").find(".u-input__count");
    for(var j=0;j< arr1.length;j++){
      count+=parseInt($(arr1[j]).val());
    }
    $(".g-checklist__sumCount").text(count);
  }

  $form       = $('.address_form');
  function ajaxSubmit(){
    event.preventDefault();
    $.ajax({
      type:'post',
      url:$form.attr("action"),
      data:$form.serialize(),
      success:function(data){
        if(data.code == 400) {
          alert(data.info);
        }else {
          alert(data.info);
          setTimeout(function() {
              history.go(-1);
            }
            ,2000);
        }
      },
      error:function(){
        alert("失败");
       // history.go(-1);
        //测试
        location.href="order_pay.html";
      }
    });
  };

  $('.address_form').validate({
    rules: {
      username: {
        required: true,
      },
      phone: {
        required: true,
        number: true
      }
    },
    messages: {
      username: {
        required: '请输入您的姓名!'
      },
      phone: {
        required: '请输入手机号码！',
        number: '请输入正确的手机号码！'
      }
    },
    errorPlacement: function(error, element) {
      error.appendTo(element.parent());
    },
    submitHandler: function() {
      ajaxSubmit();
    },
    errorElement: "p"
  })

});


