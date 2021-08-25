console.log("Sheet Connected");

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
}

/*Back to top button start, wont work?????

var button = document.getElementById("bttButton");
var scrollAmount = pageYOffset;

$(document).ready(function(){
  if (currentScroll <= 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});

$(window).scroll(function() {
  var height = $(window).scrollTop();
  if(height  > 20) {
    $("backToTop").show();
  } else {
    $("backToTop").hide();
  }
});
$(document).scroll(function() {
  console.log("Scrolled");
});

/*$(window).scroll(function() {
  if (currentScroll <= 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});
$("backToTop").click(function(){
  if($(this).scrollTop() > pageYOffset) {
  $("backToTop").show();
}else{
  $("backToTop").hide();
}
});



$(window).scroll( function() {
  if ($(this).scrollTop() > pageYOffset) {
       button.style.display="flex";
  } else {
    button.style.display="none";
  }
});

$(document).scroll("scroll", function() {
  console.log("Scrolled");
});*/

