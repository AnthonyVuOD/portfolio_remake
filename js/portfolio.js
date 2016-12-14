new Vue({
  el: '#landingPage',
  created: function () {
            window.addEventListener('scroll', function(){
              console.log('hello');
            })
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
