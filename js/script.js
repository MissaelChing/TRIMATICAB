function toggleMenu() {
    var sideNav = document.getElementById("side-menu");
    sideNav.style.width = sideNav.style.width === "100%" ? "0" : "100%";
}

function closeMenu() {
    document.getElementById("side-menu").style.width = "0";
}
document.addEventListener('scroll', function() {
    var parallaxElement = document.querySelector('.parallax'),
        scrollPosition = window.scrollY;
  
    parallaxElement.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
  });
  