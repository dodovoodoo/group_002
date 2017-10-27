var $ = require('jquery');
  $(".wrap").hover(function(){
    $(this).animate({"width":"300px","height":"100px"},1000).find(".test").animate({"width":"100px","height":"100px","margin-left":"100px"},1000);
    $(".wrap").not($(this)).animate({"width":"200px","height":"100px"},1000).find(".test").animate({"width":"80px","height":"80px","margin-left":"0px"},1000);
    });
