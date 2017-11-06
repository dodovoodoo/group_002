var $ = require('jquery');

$(function(){
  $(".g-group__list li").hover(function(){
    $(this).parent().find("li").removeClass("current");
    $(this).addClass("current");
  });
});
