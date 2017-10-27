var $ = require('components/jquery/jquery');

$(".w-topBar__nav li").click(function(){
  $(this).siblings().removeClass("current");
  $(this).addClass("current");
});
