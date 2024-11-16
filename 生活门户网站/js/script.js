(function($) {
    "use strict";
    var $html = $("html"),
        windowWidth = $(window).width(),
        windowHeight = $(window).height(); 

   $(document).ready(function(){
   AOS.init({
    duration: 1200,
  })
  }); 

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  
  hamburger.addEventListener("click", mobileMenu);
  
  function mobileMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
  }
  
  const navLink = document.querySelectorAll(".nav-link");
  
  navLink.forEach(n => n.addEventListener("click", closeMenu));
  
  function closeMenu() {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
  }
  
  
  })(jQuery);
  