new Vue({
  el: '#landingPage',
  created: function () {
    // parallax function when scrolling when window width > 1000px
    window.addEventListener('scroll', function(){
      if(window.innerWidth>1000){
        var landingDiv = document.getElementById('landingDiv');
        landingDiv.style.bottom = (window.pageYOffset *.11 + 25)+ "%";
      }
    })
    // reload when resizing window
    var windowWidth = window.innerWidth;
    window.addEventListener('resize',function(){
      if(window.innerWidth != windowWidth){
        location.reload();
      }
    });
  }
})

new Vue ({
  el: '#portfolio',
  data: {
    projects: [
      {name: "Greenbelt Climbing Routes", link:"https://anthonyvuod.github.io/GreenbeltClimbingRoutes/", photo:"images/greenbeltSS2.jpg"},
      {name: "Travis Perkins Photography", link:"https://anthonyvuod.github.io/TravisPerkinsPhotography/", photo:"images/travisPerkinsSS2.jpg"},
      {name: "How Much House?", link:"https://anthonyvuod.github.io/HowMuchHouse/", photo:"images/houseSS2.jpg"},
      {name: "Vu Properties", link:"https://anthonyvuod.github.io/VuProperties/", photo: "images/vuPropertiesSS2.jpg"}
    ]
  }
})
