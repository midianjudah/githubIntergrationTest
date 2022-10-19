// NAVIGATION
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

//MEDIA QUERY HAMBURGER


// CONTACT FORM
function ready() {
  const cf = document.querySelector("#contactForm");
  cf.addEventListener("submit", buildEmailLink, false);
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

