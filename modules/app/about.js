var $ = require('jquery');
$(function(){
  $(window).scroll(function(){
    //为了保证兼容性，这里取两个值，哪个有值取哪一个　　
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;　　//scrollTop就是触发滚轮事件时滚轮的高度
    if(scrollTop>=600){
      var temp=(document.documentElement.clientWidth-1200)/2;
      $(".g-wrap__bd").css("margin-left","200px");
      $(".g-wrap__nav").addClass("fix").css("left",temp);
    }else{
      $(".g-wrap__bd").css("margin-left","0px");
      $(".g-wrap__nav").removeClass("fix");
    }
    if(scrollTop>=document.getElementById("profile").offsetTop-50){
      $(".g-wrap__nav li").removeClass("current");
      $(".g-wrap__nav li").eq(0).addClass("current");
    }
    if(scrollTop>=document.getElementById("culture").offsetTop-50){
      $(".g-wrap__nav li").removeClass("current");
      $(".g-wrap__nav li").eq(1).addClass("current");
    }
    if(scrollTop>=document.getElementById("honor").offsetTop-50){
      $(".g-wrap__nav li").removeClass("current");
      $(".g-wrap__nav li").eq(2).addClass("current");
    }
  });
  $('.g-wrap__nav a').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
      if ($target.length) {
        var targetOffset = $target.offset().top-50;
        $('html,body').animate({scrollTop: targetOffset}, 1000);
        return false;
      }
    }
  });
});
