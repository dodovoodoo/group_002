/**************基础JS***************/
var $ = require('jquery');
/*第三方插件*/
// Swiper
var Swiper=require('modules/lib/idangerous.swiper.min');
require('modules/lib/idangerous.swiper.css');

var Swipers=require('components/swiper/swiper');
require('components/swiper/swiper.min.css');
$(function(){
  /**
   * 平滑跳转锚点
   */
  $('.g-palette__nav a').click(function () {
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
  /**新闻动态tab切换**/
  $(".g-news .g-item__tab li").click(function(){
    var temp_id=$(this).attr("id");
    $(this).addClass("current").siblings().removeClass("current");
    $(".g-news .g-item__panel").addClass("hide");
    $("#"+temp_id+"_panel").removeClass("hide");
  });
  /**校区tab切换**/
  $(".g-campus .g-item__tab li").click(function(){
    var temp_id=$(this).attr("id");
    $(this).addClass("current").siblings().removeClass("current");
    $(".g-campus .g-item__panel .swiper-container").addClass("hide");
    $("#"+temp_id+"_panel").removeClass("hide");
  });
  /**团队悬浮效果**/
  $(".g-group__item ").hover(function(){
    // $(this).find(".g-group__title").find("h2").hide();
    // $(this).find(".g-group__title").animate({"left":"170px","top":"114px"},100);
    $(this).find(".g-group__content").show();

  },function(){
   // $(this).find(".g-group__title").find("h2").show();
   //  $(this).find(".g-group__title").animate({"left":"170px","top":"205px"},100);
    $(this).find(".g-group__content").hide();
  });

  $(".g-banner__blew .swiper-slide").hover(function(){
    gbanner__up.slideTo($(this).index());
  });
});

/**新闻轮播**/
var viewSwiper = new Swiper('#company_panel .view .swiper-container');
var previewSwiper = new Swiper('#company_panel .preview .swiper-container', {
  visibilityFullFit: true,
  slidesPerView: 'auto',
  onlyExternal: true,
  onSlideClick: function() {
    viewSwiper.swipeTo(previewSwiper.clickedSlideIndex)
  }
});
var newsSwiper2 = new Swiper('#news_panel .view .swiper-container');
var prenewsSwiper2 = new Swiper('#news_panel .preview .swiper-container', {
  visibilityFullFit: true,
  slidesPerView: 'auto',
  onlyExternal: true,
  onSlideClick: function() {
    newsSwiper2.swipeTo(prenewsSwiper2.clickedSlideIndex)
  }
});
var east_panel=new Swipers('#east_panel',{
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 4,
    paginationClickable: true,
    spaceBetween: 30,
});
var middle_panel=new Swipers('#middle_panel',{
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  slidesPerView: 4,
  paginationClickable: true,
  spaceBetween: 30,
});
var south_panel=new Swipers('#south_panel',{
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  slidesPerView: 4,
  paginationClickable: true,
  spaceBetween: 30,
});
var gbanner__up=new Swipers(".g-banner__up",{
  onSlideChangeStart:function(){
    gbanner__blew.slideTo(gbanner__up.activeIndex);
  }
});
var gbanner__blew=new Swipers('.g-banner__blew',{
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  slidesPerView: 4,
  paginationClickable: true,
  spaceBetween: 64,
  onClick:function(s,e){
    var temp=$(e.target);
    if(!$(temp).hasClass("swiper-button-next")&&!$(temp).hasClass("swiper-button-prev"))
    gbanner__up.slideTo(gbanner__blew.clickedIndex);
  }
});

/**大图的向前**/
$('#company_panel .view .arrow-left').on('click', function(e) {
  e.preventDefault()
  if (viewSwiper.activeIndex == 0) {
    viewSwiper.swipeTo(viewSwiper.slides.length - 1, 1000);
    return
  }
  viewSwiper.swipePrev()
});
/**小图的向前**/
$('#company_panel .preview .arrow-left').on('click', function(e) {
  e.preventDefault()
  if (previewSwiper.activeIndex == 0) {
    previewSwiper.swipeTo(previewSwiper.slides.length - 3, 1000);
    return
  }
  previewSwiper.swipeTo(previewSwiper.activeIndex-3)
});
/**大图的向后**/
$('#company_panel .view .arrow-right').on('click', function(e) {
  e.preventDefault()
  if (viewSwiper.activeIndex == viewSwiper.slides.length - 1) {
    viewSwiper.swipeTo(0, 1000);
    return
  }
  viewSwiper.swipeNext()
});
/**小图的向后**/
$('#company_panel .preview .arrow-right').on('click', function(e) {
  e.preventDefault()
  if (previewSwiper.activeIndex == previewSwiper.slides.length - 3) {
    previewSwiper.swipeTo(0, 1000);
    return
  }
  previewSwiper.swipeTo(previewSwiper.activeIndex+3)
});



/**大图的向前**/
$('#news_panel .view .arrow-left').on('click', function(e) {
  e.preventDefault()
  if (newsSwiper2.activeIndex == 0) {
    newsSwiper2.swipeTo(newsSwiper2.slides.length - 1, 1000);
    return
  }
  newsSwiper2.swipePrev()
});
/**大图的向后**/
$('#news_panel .view .arrow-right').on('click', function(e) {
  e.preventDefault()
  if (newsSwiper2.activeIndex == newsSwiper2.slides.length - 1) {
    newsSwiper2.swipeTo(0, 1000);
    return
  }
  newsSwiper2.swipeNext()
});
/**小图的向前**/
$('#news_panel .preview .arrow-left').on('click', function(e) {
  e.preventDefault()
  if (prenewsSwiper2.activeIndex == 0) {
    prenewsSwiper2.swipeTo(prenewsSwiper2.slides.length - 3, 1000);
    return
  }
  prenewsSwiper2.swipeTo(prenewsSwiper2.activeIndex-3)
});
/**小图的向后**/
$('#news_panel .preview .arrow-right').on('click', function(e) {
  e.preventDefault()
  if (prenewsSwiper2.activeIndex == prenewsSwiper2.slides.length - 3) {
    prenewsSwiper2.swipeTo(0, 1000);
    return
  }
  prenewsSwiper2.swipeTo(prenewsSwiper2.activeIndex+3)
});



