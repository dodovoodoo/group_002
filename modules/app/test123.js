var $ = require('jquery');
$("#test").click(function () {
  $(".testBox").append("<div class='hhh'>click</div>");
});
$(".testBox").on("click", ".hhh", function () {
  alert(123);
});
