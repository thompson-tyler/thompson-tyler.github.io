// Set by media query in site.css
var isMobile = window.getComputedStyle(document.body,'::after').getPropertyValue('content').indexOf('mobile') != -1;

if (isMobile) {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-100%";
      }
      prevScrollpos = currentScrollPos;
    } 
}