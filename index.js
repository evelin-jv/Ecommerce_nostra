// selecting side-navbar
let sidenav = document.querySelector(".side-navbar");

function showNavbar() {
  // sidenav.style.display=block
  sidenav.style.left = "0";
}

function closeNavbar() {
  // sidenav.style.display=none
  sidenav.style.left = "-40%";
}
