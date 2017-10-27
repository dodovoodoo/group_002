var $ = require('components/jquery/jquery');
require('modules/lib/jquery.validate.min');
var $msgBtn = $('.btnList__item--green');

module.exports = {
	$msgBtn : $msgBtn
}
$(function(){
  $("textarea#msg").focus(function(){
    $(this).css("color","#555").val("");
  });

  $(".w-bottomBar-form").validate({
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
  });

  function ajaxSubmit(){
    event.preventDefault();
    console.log($(".w-bottomBar-form").serialize());
    $.ajax({
      type:'post',
      url:"http://www.jinjiedu.com/index.php?s=/Home/Feedback/index.html",
      data: $(".w-bottomBar-form").serialize(),
      dataType:"json",
      success:function(data){
        alert("留言成功");
      },
      error:function(){
        alert("留言失败");
      }
    });
  };
});
