var $ = require('jquery');
$(function () {
  $(document).delegate('#sum_checkBox,#sum_checkBox_1', 'click', function () {
    if (this.checked) {
      $('.u-checkBox').prop("checked", true);
      syncTotal();
    } else {
      $('.u-checkBox').removeAttr('checked');
      $(".g-checklist__total").text(0);
    }
  });
  $("#sum_checkBox").click();
  syncTotal();
  $(".u-input__count__min").click(function(){
    var valElem=$(this).siblings(".u-input__count");
    var valNum=parseInt($(valElem).val())==1?1:(parseInt($(valElem).val())-1);
    $(valElem).val(valNum);
    var subtotal=parseInt($(this).parents(".g-checklist__item").find(".g-checklist__unit").text())*valNum;
    $(this).parents(".g-checklist__item").find(".g-checklist__subtotal").text(subtotal);
    syncTotal();
  });
  $(".u-input__count__max").click(function(){
    var valElem=$(this).siblings(".u-input__count");
    var valNum=parseInt($(valElem).val())+1;
    $(valElem).val(valNum);
    var subtotal=parseInt($(this).parents(".g-checklist__item").find(".g-checklist__unit").text())*valNum;
    $(this).parents(".g-checklist__item").find(".g-checklist__subtotal").text(subtotal);
    syncTotal();
  });
  /**同步总计数据**/
  function syncTotal(){
    var summy=0;
    var arr=$(".g-checklist__subtotal");
    for(var i=0;i< arr.length;i++ ){
      summy+=parseInt($(arr[i]).text());
    }
    $(".g-checklist__total").text(summy);
    var count=0;
    var arr1=$(".u-input__count");
    for(var j=0;j< arr1.length;j++){
      count+=parseInt($(arr1[j]).val());
    }
    $(".g-checklist__sumCount").text(count);
  }
});


