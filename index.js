// entrance animations
var animationDelay = 700;
setTimeout(function(){
  $("#overlay").addClass("after")
  $("header").addClass("appear")
  $(".searchbar").addClass("appear")
}, animationDelay)




$(".home-search-button").on("click", function() {
    var city = $(".searchbar-input").val();
    localStorage.setItem("city", city)
    // exit animation
    $("#overlay").removeClass("after");
    setTimeout(function(){

      location.replace("results.html");
    }, animationDelay)
  });


// // google autocomplete 
// var input = document.querySelector(".searchbar-input");
// var autocomplete = new google.maps.places.Autocomplete(input,{types: ['(cities)']});