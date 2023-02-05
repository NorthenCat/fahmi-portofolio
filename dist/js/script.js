// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("nav-fixed");
  } else {
    header.classList.remove("nav-fixed");
  }
};

// Navlist-Line
const hamburger = document.querySelector("#navlist");
const navbar = document.querySelector("#navbar");

navlist.addEventListener("click", function () {
  navlist.classList.toggle("navlist-line-active");
  navbar.classList.toggle("hidden");
});

//Image Following The Cursor
var image = document.getElementById("image");

image.addEventListener("mousemove", function (event) {
  var x = event.clientX;
  var y = event.clientY;

  x = (x / window.innerWidth - 0.5) * 2;
  y = (y / window.innerHeight - 0.5) * 2;

  image.style.transform =
    "rotateX(" + y * 30 + "deg) rotateY(" + x * 30 + "deg)";
});

image.addEventListener("mouseout", function () {
  image.style.transform = "none";
});

// Automate Scrolling When HREF
$(document).ready(function () {
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top,
        },
        900,
        "swing",
        function () {
          window.location.hash = target;
        }
      );
  });
});
