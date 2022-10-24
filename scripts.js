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

  const navbar = document.querySelector('.nav-bar');
  const projects = [];

  // On Scroll Event
  window.addEventListener(
    'scroll',
    function( event ){
      // Navbar scrolling
      navbar.classList.toggle( 'at-top', window.scrollY == 0 );
      // Project revealing
      const projectsScrollBuffer = window.innerHeight / 2;
      document.querySelectorAll('.projectWrapper').forEach(
        function( el, i )
        {
          el.classList.toggle( 'show', window.scrollY > ( el.offsetTop - projectsScrollBuffer ) )
        }
      );
    }
  )
}

function buildEmailLink(event) {

  event.preventDefault();

  let emailLink="mailto:midianjudah@gmail.com";
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;
  const subject = "Let's talk about next steps!";
  const newline = "%0D%0A";

  emailLink+="?body="+encodeURI(message)+newline+newline+"From: "+encodeURI(name)+" <"+encodeURI(email)+">";
  emailLink += "&subject="+encodeURI(subject)

  window.open( emailLink );

  return false;
}