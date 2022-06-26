$("#manu").click (function(){
    $("#list-manu").slideToggle();
});


function onClickMenu(){
  document.getElementById("manu").classList.toggle("icon");
}


// on scroll nav start

$(document).ready(function () {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll > 100) {
        $("header").addClass("add-me");
      } else {
        $("header").removeClass("add-me");
      }
    });
  });

// on scroll nav end