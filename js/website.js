/*
  This is only for the WEBSITE

*/

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById('sidenav-items').style.width = '250px';
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById('sidenav-items').style.width = '0';
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
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('dot');
  if (number > slides.length) {
    slideIndex = 1;
  }

  if (number < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}
