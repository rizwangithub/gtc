
$( document ).ready(function() {
  function myFunction(x) {
    if (x.matches) { // If media query matches
      // document.body.style.backgroundColor = "yellow";
    } else {
      $(".slider").slick({

        dots: true,
  speed: 500,
        infinite: true,
      
        // the magic
        responsive: [{
      
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              infinite: true
            }
      
          }, {
      
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              dots: true
            }
      
          }, {
      
            breakpoint: 300,
            settings: "unslick" // destroys slick
      
          }]
      });
    }
  }
  
  var x = window.matchMedia("(max-width: 1200px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes

    new WOW().init();


});