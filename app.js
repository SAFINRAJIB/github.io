
window.addEventListener("scroll",function(){
    var myNav = document.querySelector("nav");
    myNav.classList.toggle("sticky", window.scrollY>80);
  })

 