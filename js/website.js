/*
  This is only for the WEBSITE

*/

/* 
  Mainbar starts
*/

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("sidenav-items").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("sidenav-items").style.width = "0";
}

/* Slide show implementation start */

// Next/previous controls
function plusSlides(number) {
  showSlides((slideIndex += number));
}

// Thumbnail image controls
function currentSlide(number) {
  showSlides((slideIndex = number));
}

function showSlides(number) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (number > slides.length) {
    slideIndex = 1;
  }

  if (number < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const headerElement = document.querySelector("header");
  const headerHeight = headerElement.getBoundingClientRect().height;

  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    headerElement.style.top = `${-1 * headerHeight + 7}px`;
  } else {
    headerElement.style.top = "0";
  }
}

function showHeader() {
  document.querySelector("header").style.top = "0px";
}

/* 
  Mainbar ends
*/

/* Form scripts starts */

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("change", (event) => {
    if (event.target.value) event.target.classList.add("value-changed");
    else event.target.classList.remove("value-changed");
  });
});

/* Form scripts ends */
