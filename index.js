$(document).ready(function(){

	  $("button").click(function(){
      $(".create ,.row").addClass("active");    //class active is added ....
    });
});

$(document).ready(function(){
    $(".close").click(function(){
      $(".create ,.row").removeClass("active");  //class active is removed....
    });
});