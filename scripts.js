// NAVIGATION //
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// ...TO DISAPEAR COMPLETELY //
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

/* ------------------------------------------ */

// CONTACT FORM //
function ready() {
  // Stuff to do when the page loads

  // Handle contact form submission
  const cf = document.querySelector("#contactForm");
  cf.addEventListener("submit", buildEmailLink, false);

  // On Scroll Event
  window.addEventListener(
    'scroll',
    function( event ){
      // Navbar scrolling
      const navbar = document.querySelector('.nav-bar');
      navbar.classList.toggle( 'at-top', window.scrollY == 0 );
    }
  )

}

function buildEmailLink(event) {

  event.preventDefault();

  let emailLink="mailto:midianjudah@gmail.com";
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;
  const newline = "%0D%0A";

  emailLink+="?body="+encodeURI(message)+newline+newline+"From: "+encodeURI(name)+" <"+encodeURI(email)+">";

  window.open( emailLink );

  return false;
}

